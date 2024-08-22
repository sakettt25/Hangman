const categories = {
  vegetables: ["carrot", "broccoli", "spinach", "potato", "tomato"],
  fruits: ["apple", "banana", "grape", "orange", "mango"],
  fastFoods: ["burger", "pizza", "fries", "tacos", "hotdog"],
  programmingLanguages: ["java", "c", "ruby", "python", "javascript"],
  science: ["atom", "cell", "gene", "virus", "quasar"],
  nature: ["forest", "mountain", "river", "desert", "ocean"],
  country: ["canada", "brazil", "germany", "india", "japan"],
};

function randomWord() {
  const randomCategory = getRandomCategory();
  const words = categories[randomCategory];

  console.log('Selected Category:', randomCategory); // Debug log
  console.log('Words in Category:', words); // Debug log

  return {
    word: words[Math.floor(Math.random() * words.length)],
    category: randomCategory
  };
}

function getRandomCategory() {
  const categoryKeys = Object.keys(categories);
  return categoryKeys[Math.floor(Math.random() * categoryKeys.length)];
}

export { randomWord, getRandomCategory as randomCategory };
