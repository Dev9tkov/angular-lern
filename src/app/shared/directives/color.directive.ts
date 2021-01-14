import {Directive, ElementRef, HostBinding, Renderer2} from '@angular/core';

@Directive({
  selector: '[appColor]'
})

export class ColorDirective {
  @HostBinding('style.backgroundColor')
  backgroundColor = 'transperent';

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.element.nativeElement, 'cursor', 'pointer');
  }
}
