// exercise 2
/* 
1 - Write a function addSpeaker to add a speaker to the array of speakers.
The speaker you add must be an object with a key of name and a value of whatever you’d like.

2 - Write a function addLanguage that adds a language to the languages object.
The language object you add should have a key with the name of the language and the value of another object 
with a key of “hello” and a value of however you spell “hello” in the language you add.

3 - Write a function addCountry that adds a European country to the countries object 
(inside of the continents object, inside of the countries object).
The country you add should be an object with the key as name of the country and the value as an object 
with the keys of “capital” and “population” and their respective values.
*/
// Given the following nested object:
var nestedObject = {
  speakers: [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }],
  data: {
    continents: {
      europe: {
        countries: {
          switzerland: {
            capital: "Bern",
            population: 8000000
          }
        }
      }
    },
    languages: {
      spanish: {
        hello: "Hola"
      },
      french: {
        hello: "Bonjour"
      }
    }
  },
  // add Speaker to the array of speakers
  set addSpeaker(speaker) {
    nestedObject.speakers.push(speaker);
  },
  // add language
  set addLanguage(lang) {
    nestedObject.data.languages = Object.assign(
      nestedObject.data.languages,
      lang
    );
  },
  // add country
  set addCountry(country) {
    nestedObject.data.continents.europe.countries = Object.assign(
      nestedObject.data.continents.europe.countries,
      country
    );
  }
};

// speaker
nestedObject.addSpeaker = { name: "John" };
console.log(nestedObject.speakers);

console.log("-------------------------------------");

// languages
nestedObject.addLanguage = { italian: { hello: "Ciao" } };
console.log(nestedObject.data.languages);

console.log("-------------------------------------");

// countries
nestedObject.addCountry = {
  germany: { capital: "Berlin", population: "82790000" }
};
console.log(nestedObject.data.continents.europe.countries);
