import { writeToFile } from "belajar-nodejs-npm/write"
import { sayHello, printArray } from "belajar-nodejs-npm-library-abdu"

writeToFile("abdu.log", "Hello NPM from index DUARRR!")
console.log(sayHello("abdu"));
console.log(printArray(["abdu", "eunha", "sowon"]));

