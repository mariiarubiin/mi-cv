import { Directive, ElementRef, OnDestroy, OnInit, inject } from '@angular/core';

@Directive({ selector: '[appReveal]' })
export class Reveal implements OnInit, OnDestroy {
  private el = inject(ElementRef);
  private observer?: IntersectionObserver;

  ngOnInit() {
    const node = this.el.nativeElement as HTMLElement;
    node.classList.add('reveal');
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('visible');
          this.observer?.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    this.observer.observe(node);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
