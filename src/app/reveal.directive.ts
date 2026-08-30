import { afterNextRender, Directive, ElementRef, inject } from '@angular/core';

@Directive({ selector: '[appReveal]' })
export class Reveal {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);

  constructor() {
    afterNextRender(() => {
      const node = this.el.nativeElement;
      node.classList.add('reveal');
      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('reveal--in');
              io.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
      );
      io.observe(node);
    });
  }
}
