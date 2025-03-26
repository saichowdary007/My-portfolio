// Custom smooth scroll implementation for optimized 90 FPS animation
type EasingFunction = (t: number) => number;

let isScrolling = false;
let startTime: number;
let startY: number;
let targetY: number;
let distance: number;
const duration = 800;
let rafId: number | null = null;

const easeInOutQuad: EasingFunction = t => {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};

function stopAnimation() {
  if (rafId) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
  isScrolling = false;
}

function animate(timestamp: number) {
  if (!startTime) startTime = timestamp;
  const progress = timestamp - startTime;
  const percent = Math.min(progress / duration, 1);
  
  const eased = easeInOutQuad(percent);
  window.scrollTo(0, startY + (distance * eased));
  
  if (progress < duration) {
    rafId = requestAnimationFrame(animate);
  } else {
    stopAnimation();
  }
}

function smoothScroll(targetYPosition: number) {
  stopAnimation();
  isScrolling = true;
  startY = window.scrollY;
  targetY = targetYPosition;
  distance = targetY - startY;
  startTime = 0;
  rafId = requestAnimationFrame(animate);
}

function handleAnchorClick(e: MouseEvent) {
  const target = e.target as HTMLAnchorElement;
  if (target.hash && target.pathname === window.location.pathname) {
    e.preventDefault();
    const targetElement = document.querySelector(target.hash);
    if (targetElement) {
      const targetRect = targetElement.getBoundingClientRect();
      smoothScroll(targetRect.top + window.scrollY - 100); // Offset for header
    }
  }
}

export function initializeSmoothScroll() {
  if (typeof window === 'undefined') return;

  // Set up event listeners
  document.addEventListener('click', handleAnchorClick, { passive: true });
  window.addEventListener('wheel', stopAnimation, { passive: true });
  window.addEventListener('touchmove', stopAnimation, { passive: true });

  return () => {
    document.removeEventListener('click', handleAnchorClick);
    window.removeEventListener('wheel', stopAnimation);
    window.removeEventListener('touchmove', stopAnimation);
    stopAnimation();
  };
}
