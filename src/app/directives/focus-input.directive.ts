import { Directive, AfterViewInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFocusInput]'
})
export class FocusInputDirective implements AfterViewInit {

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    this.el.nativeElement.focus();
  }

}
