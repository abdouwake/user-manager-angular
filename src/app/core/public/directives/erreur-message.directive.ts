import {
  Directive,
  HostBinding,
  ElementRef,
  Renderer2,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appErreurMessage]',
})
export class ErreurMessageDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    this.elRef.nativeElement.style.color = 'red';
    this.elRef.nativeElement.style.fontSize = '15px';
  }

  ngOnInit() {}
}
