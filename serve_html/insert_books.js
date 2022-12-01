const express = require('express');
const app = express();

const mongoose = require ("mongoose");
mongoose.connect(
    'mongodb+srv://johnny4737:bomber09@cluster0.qgwa115.mongodb.net/books?retryWrites=true&w=majority',
    { useUnifiedTopology: true }
);

const db = mongoose.connection;
db.once("open", () => {
    console.log("Ah! connected to MongoDB using Mongoose!!");
});
const Books = require('./models/bookmodel.js');
Books.create(
    {
        _id: 1,
        name: 'To Kill A Mockingbird',
        authorname: 'Harper Lee',
        description: 'Publisher is J.B Lippincott and genre is souther gothic fiction',
        bookimage: './images/book1.jpg'
    },
    function (error, savedDocument) {
      if (error) console.log(error);
      console.log(savedDocument);
    }
 );

 Books.create(
    {
        _id: 2,
        name: 'Great Gatsby',
        authorname: 'Scott Fitzgerald',
        description: 'Published by Charles Scribner in 1925',
        bookimage: './images/book2.jpg'
    },
    function (error, savedDocument) {
      if (error) console.log(error);
      console.log(savedDocument);
    }
 );



 Books.create(
    {
        _id: 3,
        name: 'Fahrenheit451',
        authorname: 'Ray Bradbury',
        description: 'Published by Ballantine in 1953 and genre is Utopian and dystopian fiction',
        bookimage: './images/book3.jpg'
    },
    function (error, savedDocument) {
      if (error) console.log(error);
      console.log(savedDocument);
    }
 );