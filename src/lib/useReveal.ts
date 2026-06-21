import { useEffect } from 'react';

/**
 * useReveal — Premium scroll-reveal hook.
 * Observes all elements matching `selector` and adds `activeClass`
 * when they enter the viewport. Supports stagger via `data-delay`
 * attribute (value in ms, applied as transition-delay).
 */
export function useReveal(
  selector = '.reveal-hidden, .reveal-scale, .reveal-fade',
  activeClass = 'reveal-active',
  threshold = 0.1
) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay;
            if (delay) {
              el.style.transitionDelay = `${delay}ms`;
            }
            el.classList.add(activeClass);
            observer.unobserve(el); // once revealed, stop observing
          }
        });
      },
      { threshold }
    );

    document.querySelectorAll(selector).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector, activeClass, threshold]);
}
