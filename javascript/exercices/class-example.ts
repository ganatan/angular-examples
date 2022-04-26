interface Greeting {
  name: string;

  sayHello(friendName: string): string; // A method

  sayBye: (friendName: string) => string; // A arrow method
}


function interface_ex1_test() {
  // Create an object:
  var enPerson1: Greeting = {
    name: "John",
    sayHello: function (friendName: string): string {
      return "Hello " + friendName;
    },
    sayBye: function (friendName: string): string {
      return "Good Bye";
    }
  };
  // Create an object
  var vnPerson1: Greeting = {
    name: "Tran",
    sayHello: function (friendName: string): string {
      return "Xin Chao " + friendName;
    },
    sayBye: function (friendName: string): string {
      return "Tam biet " + friendName;
    }
  };
  // Test objects:
  console.log(enPerson1.name); // John
  console.log(enPerson1.sayHello("Tom")); // Hello Tom

  console.log(vnPerson1.name); // Tran
  console.log(vnPerson1.sayBye("Jerry")); // Tam Biet Jerry
}
interface_ex1_test(); // Call the function.

/*class Employee {
    empCode: number;
    empName: string;
}

let emp = new Employee();*/

/* class Employee {
    empCode: number;
    empName: string;

    constructor(code: number, name: string) {
            this.empName = name;
            this.empCode = code;
    }

    getSalary() : number {
        return 10000;
    }
}

let emp = new Employee(1111,'2222');

console.log('emp:' + emp);
console.log('emp:' + JSON.stringify(emp));*/
