// main.js
import recipes from './recipes.mjs'; // Make sure this path matches your file structure

// Generates a random integer from 0 to num - 1
function random(num) {
  return Math.floor(Math.random() * num);
}

// Returns a random entry from an array
function getRandomListEntry(list) {
  const index = random(list.length);
  return list[index];
}

// ✅ Test the functionality
console.log(getRandomListEntry(recipes));
