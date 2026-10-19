import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ArrowDown } from 'lucide-react';
import './CoconutExperience.css';

const TOTAL_FRAMES = 150;
const FRAME_PATH = (index) =>
  `/assets/scroll_frames/frame_${String(index).padStart(3, '0')}.webp`;

export default function CoconutExperience() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const progressBarRef = useRef(null);
  const hintRef = useRef(null);
  const framesRef = useRef([]);
  const currentFrameRef = useRef(0);
  const isPreloadingRef = useRef(false);

  const [isReady, setIsReady] = useState(false);

  // Render a specific frame index to canvas
  const drawFrame = useCallback((frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const img = framesRef.current[frameIndex];
    if (img && img.complete && img.naturalWidth > 0) {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      currentFrameRef.current = frameIndex;
    }
  }, []);

  // Preload frames progressively
  useEffect(() => {
    if (isPreloadingRef.current) return;
    isPreloadingRef.current = true;

    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = 720;
      canvas.height = 1280;
    }

    // Step 1: Preload Frame 0 immediately for instant display
    const firstImg = new Image();
    firstImg.src = FRAME_PATH(0);
    firstImg.onload = () => {
      framesRef.current[0] = firstImg;
      drawFrame(0);
      setIsReady(true);

      // Step 2: Load the remaining frames in background
      for (let i = 1; i < TOTAL_FRAMES; i++) {
        const img = new Image();
        img.src = FRAME_PATH(i);
        img.onload = () => {
          framesRef.current[i] = img;
        };
        img.onerror = () => {
          framesRef.current[i] = framesRef.current[i - 1] || firstImg;
        };
      }
    };
  }, [drawFrame]);

  // High-performance scroll scrubbing engine with requestAnimationFrame & viewport guard
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const container = containerRef.current;
          if (!container) {
            ticking = false;
            return;
          }

          const rect = container.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // Viewport Guard: If completely outside visible area (e.g. user is in Hero section), skip!
          if (rect.top > windowHeight + 100 || rect.bottom < -100) {
            ticking = false;
            return;
          }

          const totalScrollDistance = rect.height - windowHeight;
          if (totalScrollDistance <= 0) {
            ticking = false;
            return;
          }

          const scrolledPixels = -rect.top;
          const rawProgress = scrolledPixels / totalScrollDistance;
          const clampedProgress = Math.max(0, Math.min(1, rawProgress));

          // Direct DOM style updates to avoid React re-render lag
          if (progressBarRef.current) {
            progressBarRef.current.style.width = `${clampedProgress * 100}%`;
          }

          if (hintRef.current) {
            hintRef.current.style.opacity = clampedProgress < 0.08 ? '1' : '0';
            hintRef.current.style.pointerEvents = clampedProgress < 0.08 ? 'auto' : 'none';
          }

          const targetFrame = Math.min(
            TOTAL_FRAMES - 1,
            Math.max(0, Math.round(clampedProgress * (TOTAL_FRAMES - 1)))
          );

          if (targetFrame !== currentFrameRef.current) {
            let frameToDraw = targetFrame;
            if (!framesRef.current[frameToDraw]?.complete) {
              for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
                if (framesRef.current[targetFrame - offset]?.complete) {
                  frameToDraw = targetFrame - offset;
                  break;
                }
                if (framesRef.current[targetFrame + offset]?.complete) {
                  frameToDraw = targetFrame + offset;
                  break;
                }
              }
            }
            drawFrame(frameToDraw);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [drawFrame]);



  return (
    <section
      id="experience"
      ref={containerRef}
      className="coconut-experience-container"
      aria-label="3D Coconut Milk Extraction Experience"
    >
      {/* Top Soft Blend Transition from Hero */}
      <div className="experience-top-blend" aria-hidden="true" />

      {/* Sticky Viewport Stage */}
      <div className="experience-sticky-stage">
        {/* Ambient Blurred Background (Immersion for ultra-wide / tall viewports) */}
        <div className="factory-ambient-backdrop" aria-hidden="true">
          <img
            src="/assets/factory_portal_bg.webp"
            alt=""
            className="factory-ambient-img"
          />
          <div className="factory-ambient-vignette" />
        </div>

        {/* 16:9 Aspect-Ratio Locked Factory Gate Stage */}
        <div className="factory-scene-stage">
          {/* Main Crisp Factory Gate Artwork */}
          <img
            src="/assets/factory_portal_bg.webp"
            alt="தாத்தா தேங்காய் பால் Factory Entrance & Extraction Portal"
            className="factory-scene-bg-img"
          />

          {/* Precision 3D Animation Canvas Mount (sitting exactly inside the center portal frame) */}
          <div className="portal-canvas-mount">
            <canvas
              ref={canvasRef}
              className="coconut-portal-canvas"
              width={720}
              height={1280}
            />

            {/* Specular Mirror Sheen Reflection */}
            <div className="portal-glass-overlay" />

            {/* Subtle Progress Bar on the portal threshold */}
            <div className="portal-progress-bar">
              <div
                ref={progressBarRef}
                className="portal-progress-fill"
                style={{ width: '0%' }}
              />
            </div>

            {/* Loading Indicator */}
            {!isReady && (
              <div className="portal-loader-overlay">
                <div className="portal-loader-spinner" />
              </div>
            )}
          </div>

          {/* Scroll Hint Indicator at Start */}
          <div ref={hintRef} className="scroll-scrub-hint">
            <span className="hint-pill">
              <ArrowDown size={14} className="hint-arrow" />
              <span>Scroll to Extract 3D Coconut Milk</span>
            </span>
          </div>


        </div>
      </div>

      {/* Bottom Soft Blend Transition into Products Section */}
      <div className="experience-bottom-blend" aria-hidden="true" />
    </section>
  );
}
