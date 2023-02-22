import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appPasswordToggle]',
  exportAs: 'appPasswordToggle'
})
export class PasswordToggleDirective {
  constructor(private element: ElementRef) {}
  @Input() appPasswordToggle = false;

  @HostListener('click') onClick() {
    this.toggleType();
  }

  toggleType() {
    const input = this.element.nativeElement.childNodes[0];
    if(this.appPasswordToggle) {
      input.type = 'text';
    } else {
      input.type = 'password'
    }
  }
}
