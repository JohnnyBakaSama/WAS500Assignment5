const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bookSchema = new Schema({
    _id: { type: Number },
    name: { type: String },
    authorname: { type: String },
    description: { type: String },
    bookimage: { type: String }
}, { timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
    }
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;