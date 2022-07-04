import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  selected: boolean;
  input03: string
  constructor() {
    this.selected = false;
    this.input03 = 'input03 Example"';
  }

  onSelected(event: any): void {
    this.selected = true;
    console.log('00000000001');
  }

}
