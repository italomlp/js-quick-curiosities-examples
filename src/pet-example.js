import { Pet, petSpeak } from './models/Pet.js';

const dog = new Pet('auau');
petSpeak(dog);

// console.log(dog.#speech); // error

console.log(Pet.isSpeakable(dog));

const mutedDog = new Pet();

console.log(Pet.isSpeakable(mutedDog));
