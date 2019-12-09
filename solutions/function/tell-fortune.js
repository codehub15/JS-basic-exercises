// https://www.teaching-materials.org/javascript/exercises/functions

/*
The Fortune Teller

Why pay a fortune teller when you can just program your fortune yourself?
    Write a function named tellFortune that:
        takes 4 arguments: number of children, partner's name, geographic location, job title.
        outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.
*/

/**
 * This is a fortune teller function
 * why pay a fortune teller when you can just program your fortune yourself
 * @param {number} childrenNum
 * @param {string} partnerName
 * @param {string} geoLocation
 * @param {string} jobTitle
 *
 * @return {string}  message of fortune
 *
 * @example
 *      tellFortune(2, "partnerino", "nice place", "developer");
 *
 */

function tellFortune(childrenNum, partnerName, geoLocation, jobTitle) {
  /*
    keep it DRY (don't repeat yourself)
    let fortuneMsg = `You will be a ${jobTitle} in ${geoLocation} and married to ${partnerName} with ${childrenNum} kids.`;
    return fortuneMsg;
  */

  // make it DRY, that's mean optimize your code
  return `You will be a ${jobTitle} in ${geoLocation} and married to ${partnerName} with ${childrenNum} kids.`;
}

console.log(tellFortune(2, "partnerino", "nice place", "developer"));

//let tellFirstFortune = tellFortune(2, "partnerino", "nice place", "developer");
//console.log(tellFirstFortune);
