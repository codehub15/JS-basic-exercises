/* 
exercise 2
Create an array of objects, where each object describes a book and has properties 
for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).

-Iterate through the array of books. For each book, 
log the book title and book author like so: “The Hobbit by J.R.R. Tolkien”.

-Now use an if/else statement to change the output depending on whether you read it yet or not. 
If you read it, log a string like ‘You already read “The Hobbit” by J.R.R. Tolkien’, 
and if not, log a string like ‘You still need to read “The Lord of the Rings” by J.R.R. Tolkien.’
*/

const books = [
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: true
  },
  {
    title: "Romeo und Julia",
    author: "William Shakespeare",
    alreadyRead: true
  },
  {
    title: "Der Meister und Margarita",
    author: "Michail Bulgakow",
    alreadyRead: false
  }
];

/* for (let i = 0; i < books.length; i += 1) {
  console.log(`The ${books[i]["title"]} by ${books[i].author}`);
}
*/

for (let i = 0; i < books.length; i += 1) {
  if (books[i]["alreadyRead"]) {
    console.log(
      `You already read "The ${books[i]["title"]} by ${books[i].author}"`
    );
  } else {
    console.log(
      `You still need to read "The ${books[i]["title"]} by ${books[i].author}"`
    );
  }
}

console.log("\nanother version\n");

// another version
var books2 = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  }
];
for (var i = 0; i < books2.length; i++) {
  var book = books2[i];
  var bookInfo = book.title + '" by ' + book.author;
  if (book.alreadyRead) {
    console.log('You already read "' + bookInfo);
  } else {
    console.log('You still need to read "' + bookInfo);
  }
}
