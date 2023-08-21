import React, { useRef, useEffect } from 'react';
import SmoothScrollbar from 'smooth-scrollbar';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children, ...rest }: LayoutProps): JSX.Element {
  const $content = useRef<HTMLDivElement>(null);
  const scrollbar = useRef<SmoothScrollbar | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = $content.current;

    if (el) {
      scrollbar.current = SmoothScrollbar.init(el, {
        // renderByPixels: false,
        damping: 0.075,
        delegateTo: document,
      });

      scrollbar.current.setPosition(0, 0);
      scrollbar.current.track.xAxis.element.remove();

      ScrollTrigger.scrollerProxy(el, {
        scrollTop(value?: number) {
          if (typeof value !== 'undefined') {
            if (scrollbar.current) {
              scrollbar.current.scrollTop = value;
            }
          }
          return scrollbar.current ? scrollbar.current.scrollTop : 0;
        },
      });

      scrollbar.current.addListener(ScrollTrigger.update);
    }

    return () => {
      if (scrollbar.current) {
        scrollbar.current.destroy();
        scrollbar.current = null;
      }
    };
  }, []);

  return (
    <div data-scrollbar ref={$content} {...rest}>
      <div className="container">{children}</div>
    </div>
  );
}