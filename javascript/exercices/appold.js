/* let stringVariable: string; 
let numberVariable : number;
Boolean
Null
Undefined
Symbol
Object */

function displayVariables() {
  let stringVariable1 = 'stringVariable1';
  let stringVariable2 = new String({ "name": "stringVariable2" });
  let objectVariable1 = new Object({ "name": "stringVariable2" });
  stringVariable1 = '1111';
  console.log('displayVariables');
  console.log('stringVariable1:' + stringVariable1);
  console.log('stringVariable2:' + stringVariable2);
  console.log('objectVariable1:' + objectVariable1);
  console.log('stringVariable1 typeof:' + typeof stringVariable1);
  console.log('stringVariable2 typeof:' + typeof stringVariable2);
  console.log('objectVariable1 typeof:' + typeof objectVariable1);
}

displayVariables();

class Mailer {
  constructor(settings, logger) {
    this.logger = logger;
  }
}
let mailer = new Mailer();

console.log('Mailer:' + mailer);
console.log('Mailer:' + JSON.stringify(mailer));
