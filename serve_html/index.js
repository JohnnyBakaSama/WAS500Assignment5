const port = 3000,
  express = require("express"),
  app = express();
const path = require('path')
const mongoose = require ("mongoose");
const Book = require("./models/bookmodel");
const booksController = require('./controllers/book');
const dbURI = 'mongodb+srv://johnny4737:bomber09@cluster0.qgwa115.mongodb.net/books?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => console.log('connected to db'))
  .catch((err) => console.log(err)
);

const db = mongoose.connection;

db.once("open", () => {
    console.log("Ah! connected to MongoDB using Mongoose!!");
});

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use('/public/images', express.static('./public/images'))



  app
    .get("/", (req, res) => {
      res.render("home")
      })


  app
    .get("/book1", (req, res) => {
     res.render("book1");
      })

  app
    .get("/bookslist", (req, res) => {
      res.render("bookslist");
      })

  app.get(
    "/books", booksController.getAllBooks,
    (req, res) => {
      res.send(req.data);
    }
  );
  
  app.get(
    "/books/:_id", booksController.getOneBook,
    (req, res) => {
      res.render('book1', {bookmodel: req.data});
    }
  );



/*
app.get("/books", (req, res) => {
  Book.find({}).then(function(books) {
    console.log(books)
    res.send(books);
    return books
});


app.get("/books/find", (req,res)=>{
Book.find({}, {_id: 1}).then(function(books) {
  console.log(books)
  res.send(books);
  return books
})

})

  /*
  res.render('books', {_id: , name: , authorname: , description:, bookimage: });

});
*/

// Error Page
app.get("*", (req,res) => {
  res.render("error")
    })




  .listen(port, () => {
    console.log(
      `The Express.js server has started and is listening ➥ on port number: ${port}`
    );
  }); 