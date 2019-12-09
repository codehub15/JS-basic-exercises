// https://www.teaching-materials.org/javascript/exercises/functions

/*
The Puppy Age Calculator

You know how old your dog is in human years, but what about dog years? Calculate it!
    Write a function named calculateDogAge that:
        takes 1 argument: your puppy's age (in human years).
        calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
        outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
    Call the function three times with different sets of values.
    Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.
*/

/**
 * function to calculate dog age in dog years
 * @param {number} ageDog
 * @returns {string}
 * @returns {string} message
 * @example
 *      calculateDogAge(2)
 */

function calculateDogAge(ageDog) {
  let agePuppyInDogAge = ageDog * 7;
  return `Your doggie is ${agePuppyInDogAge} years old in dog years!`;
}

console.log(calculateDogAge(5));
