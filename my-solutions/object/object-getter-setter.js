// object to collect all information and store on one place

// getter
console.log("getter");
// example of getter
const person = {
  name: "John",
  age: 35,
  language: "en",
  get lang() {
    return this.language;
  }
};
console.log(person);
console.log(`The language is ${person.language}`);

// setter
console.log("\nsetter");
// example of setter
const person2 = {
  name: "John",
  age: 35,
  language: "",
  set lang(lang) {
    this.language = lang;
  }
};
console.log(person2);
// set new value
person2.lang = "ru";
console.log(`The language is now ${person2.language}`);

console.log("\n");

// more examples of getter
const person3 = {
  firstName: "John",
  lastName: "Smith",
  middleName: "Alex",
  birthYear: 1988,
  birthDay: 10,
  birthMonth: 1,
  get fullName() {
    return this.firstName + " " + this.middleName + " " + this.lastName;
  },
  get age() {
    return 2019 - this.birthYear;
  },
  get starSign() {
    let bDay = this.birthDay;
    let bMonth = this.birthMonth;
    // Aquarius January 21 – February 18 (Wassermann)
    if ((bMonth == 1 && bDay >= 21) || (bMonth == 2 && bDay <= 18)) {
      return "Aquarius";
    }
    // Pisces February 19 - March 20
    else if ((bMonth == 2 && bDay >= 19) || (bMonth == 3 && bDay <= 20)) {
      return "Pisces";
    }
    // Aries March 21 - April 20 (Widder)
    else if ((bMonth == 3 && bDay >= 21) || (bMonth == 4 && bDay <= 20)) {
      return "Aries";
    }
    // Taurus April 21 – May 21 (Stier)
    else if ((bMonth == 4 && bDay >= 21) || (bMonth == 5 && bDay <= 21)) {
      return "Taurus";
    }
    // Gemini:  May 22 – June 21 (Zwillinge)
    else if ((bMonth == 5 && bDay >= 22) || (bMonth == 6 && bDay <= 21)) {
      return "Gemini";
    }
    // Cancer:  June 22 – July 22 (Krebs)
    else if ((bMonth == 6 && bDay >= 22) || (bMonth == 7 && bDay <= 22)) {
      return "Cancer";
    }
    // Leo: July 23 – August 23 (Löwe)
    else if ((bMonth == 7 && bDay >= 23) || (bMonth == 8 && bDay <= 23)) {
      return "Leo";
    }
    // Virgo: August 24 – September 22 (Jungfrau)
    else if ((bMonth == 8 && bDay >= 24) || (bMonth == 9 && bDay <= 22)) {
      return "Virgo";
    }
    // Libra: September 23 – October 23 (Waage)
    else if ((bMonth == 9 && bDay >= 23) || (bMonth == 10 && bDay <= 23)) {
      return "Libra";
    }
    // Scorpio: October 24 – November 22 (Skorpion)
    else if ((bMonth == 10 && bDay >= 24) || (bMonth == 11 && bDay <= 22)) {
      return "Scorpio";
    }
    // Sagittarius: November 23 – December 21 (Schütze)
    else if ((bMonth == 11 && bDay >= 23) || (bMonth == 12 && bDay <= 21)) {
      return "Sagittarius";
    }
    // Capricorn: December 22 – January 20 (Steinbock)
    else if ((bMonth == 12 && bDay >= 22) || (bMonth == 1 && bDay <= 20)) {
      return "Capricorn";
    }
    // no matches
    else {
      return "error";
    }
  }
};

console.log(person3);
console.log(`person3 is ${person3.fullName}`);
console.log(`person3 age is ${person3.age}`);
console.log(
  `person3 was born on ${person3.birthDay}.${person3.birthMonth}.${person3.birthYear}`
);
console.log(`star sign is ${person3.starSign}`);
