import { useEffect, useRef } from 'react';

const FRAME_COUNT = 300;
const frameSrc = (i: number) =>
  `/frames/ezgif-frame-${String(i + 1).padStart(3, '0')}.jpg`;

export default function ScrollHero() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const wrapper = wrapperRef.current!;
    const ctx = canvas.getContext('2d')!;
    const images: HTMLImageElement[] = new Array(FRAME_COUNT);

    function progress() {
      const rect = wrapper.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return 0;
      return Math.min(1, Math.max(0, -rect.top / scrollable));
    }

    function draw() {
      const idx = Math.min(FRAME_COUNT - 1, Math.floor(progress() * FRAME_COUNT));
      const img = images[idx];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.naturalWidth / img.naturalHeight;
      let w: number, h: number;
      if (imgRatio > canvasRatio) {
        h = canvas.height;
        w = h * imgRatio;
      } else {
        w = canvas.width;
        h = w / imgRatio;
      }
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, (canvas.width - w) / 2, (canvas.height - h) / 2, w, h);
    }

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      draw();
    }

    let ticking = false;
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          draw();
          ticking = false;
        });
        ticking = true;
      }
    }

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = frameSrc(i);
      if (i === 0) img.onload = draw;
      images[i] = img;
    }

    resize();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', resize);
    window.addEventListener('orientationchange', resize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', resize);
      window.removeEventListener('orientationchange', resize);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative h-[500vh] w-full bg-[#050505]">
      <canvas ref={canvasRef} className="sticky top-0 block h-screen w-full" />
    </div>
  );
}
