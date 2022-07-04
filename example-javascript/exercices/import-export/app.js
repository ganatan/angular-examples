
import Actor from './actor';
import { Producer } from './producer';
let Composer = require('./composer.js');

class Movie {
  name;
}

let movie = new Movie();
movie.name = 'Gladiator';

/*let composer = new Composer();
composer.name = 'Hanz Zimmer';*/

let actor = new Actor();
actor.name = 'Russel Crowe';

let producer = new Producer();
producer.name = 'Ridley Scott';

Composer.name = 'Composer';

console.log('movie:' + movie);
console.log('movie:' + JSON.stringify(movie));

console.log('actor:' + actor);
console.log('actor:' + JSON.stringify(actor));

console.log('producer:' + producer);
console.log('producer:' + JSON.stringify(producer));

console.log('composer:' + Composer);
console.log('composer:' + JSON.stringify(Composer));