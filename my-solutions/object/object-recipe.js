/* 
exercise 1
Create an object to hold information on your favorite recipe. 
It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
On separate lines (one console.log statement for each), log the recipe information so it looks like:
-Mole
-Serves: 2
-Ingredients:
-cinnamon
-cumin
-cocoa
*/
const recipe = {
  name: "some recipe",
  serves: 2,
  ingredients: ["cinnamon", "cumin", "cocoa", "sugar", "egg", "flour", "milk"],
  preparingTime: 15,
  prepare: () => {
    return `Mix all ingredients ${recipe.ingredients} together and than put it in oven for 10 minutes`;
  }
};

console.log(`Here is a recipe ${recipe.name}.
You need for that recipe the following ingredients: ${recipe.ingredients}.
The preparing time is ${recipe.preparingTime} minutes.
Instruction for preparing: ${recipe.prepare()}.
`);
