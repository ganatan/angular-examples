import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Output() selected: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  validate(): void {
    this.selected.emit('toto');
  }

}
