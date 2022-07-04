import { Component } from "@angular/core";

@Component({
  selector: 'app-label',
  template: `
    <h1>LabelComponent h1</h1>
    <h2>LabelComponent h2</h2>
    `,
  styles: [`
    h1 {
      color : red;
    }
    
    h2 {
      color : green;
    }
  `],
})
export class LabelComponent {

}