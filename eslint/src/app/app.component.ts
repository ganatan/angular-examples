import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-starter';
  constructor() {
    const toto = 10;
    const momo = 50;
    console.log('var:' + toto);
    console.log('var:' + momo);
  }

  getItem(): number {
    const toto = 10;

    return toto;
  }

  getTest() {
    const toto = 10;
    console.log('toto:' + toto);
  }

  getAlert() {
    /* eslint-disable */
    alert('test');
    /* eslint-enable */

    alert('test'); // eslint-disable-line

    /* eslint-disable no-alert, no-console */
    alert('test');
    console.log('test');
    /* eslint-enable no-alert, no-console */

  }

}
