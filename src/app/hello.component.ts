import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `./app.component.html`,
  styles: [`./app.component.css`]
})
export class HelloComponent  {
  @Input() name: string;
}
