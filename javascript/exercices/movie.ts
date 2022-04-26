class ClassExample1 {
  name1: string;
}

class ClassExample2 {
  name2: string;
}

class ClassExample extends ClassExample1 {
  name: string;
}

interface Movie1 {
  name1: string;
}


interface Movie2 {
  name2: string;
}

interface Movie3 {
  name3: string;
}


interface Movie extends Movie1, Movie2, Movie3 {
  name: string;
}


function test() {

  let toto = new ClassExample1();
  toto.name1 = '12321231';
  console.log('classExample:' + toto);
  console.log('classExample:' + JSON.stringify(toto));


  let classExample1: ClassExample1 = {
    name1: "John",
  };

  /*   let classExample: ClassExample = {
      name: "John",
      name1: "John",
    };
  
    let movie1: Movie1 = {
      name1: "John",
    };
    let movie2: Movie2 = {
      name2: "John",
    };
    let movie3: Movie3 = {
      name3: "John",
    };
    let movie: Movie = {
      name: "John",
      name1: "John",
      name2: "John",
      name3: "John",
    };
  
    console.log('movie:' + movie);
    console.log('movie:' + JSON.stringify(movie));
  
    console.log('movie1:' + movie1);
    console.log('movie1:' + JSON.stringify(movie1));
  
    console.log('movie2:' + movie2);
    console.log('movie2:' + JSON.stringify(movie2));
  
    console.log('movie3:' + movie1);
    console.log('movie3:' + JSON.stringify(movie3));
  
    console.log('classExample1:' + classExample1);
    console.log('classExample1:' + JSON.stringify(classExample1));
  
    console.log('classExample:' + classExample);
    console.log('classExample:' + JSON.stringify(classExample)); */

}



test();

