import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.css']
})
export class MemoComponent {

  @Input() name: String;
  constructor() {
    this.name = "default";
  }

}
