import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: 'input [appLog]'
})
export class LogDirective {

  @HostListener('blur', ['$event'])
  onInput(event): void {
    console.log(event.target.value);
  }
}
