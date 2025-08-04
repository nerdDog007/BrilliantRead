import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  authors: { type: String, required: true },
  title: { type: String, required: true },
  image: { type: String, required: true },
  id: { type: String, required: true },
  subtitle: { type: String },
  url: { type: String, required: true },
  genre: { type: String, required: true },
});

const Book = mongoose.model('Book', bookSchema);
export default Book;