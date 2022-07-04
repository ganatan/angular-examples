import { Component, OnInit } from '@angular/core';


const anonymousFunction = function anonymousFunction() {
  console.log('anonymousfunction');

  return 'anonymousfunction';
}

const arrowFunction = () => {
  return 'arrowFunction';
}

function simplefunction() {
  return 'simplefunction';
}

@Component({
  selector: 'app-contact',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  step1: string;
  step2: string;
  step3: string;
  elementTest: string
  objectTest: {};

  constructor() {
    this.step1 = '';
    this.step2 = '';
    this.step3 = '';
    this.elementTest = '';
    this.objectTest = {};
  }

  ngOnInit(): void {
    this.step1 = anonymousFunction();
    this.step2 = arrowFunction();
    this.step3 = simplefunction();
  }

  testForEach() {
    const array1 = ['a', 'b', 'c'];
    array1.forEach(item => {
      this.elementTest = item;
      console.log(item)
    });
  }

  testMap() {
    const array1 = [1, 4, 9, 16];
    const map1 = array1.map(item => {
      console.log('map1:' + item);
      1
    });
  }

  testConcat() {
    const array1 = ['a', 'b', 'c'];
    const array2 = ['d', 'e', 'f'];
    const array3 = array1.concat(array2);
    this.objectTest = array3;
  }


}
