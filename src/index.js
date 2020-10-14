import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Proper List

const books = [
  {
    bookImage: 'https://m.media-amazon.com/images/I/81V8ozIJTVL._AC_UY436_FMwebp_QL65_.jpg',
    author: 'Robin DiAngelo',
    title: 'White Fragility'
  },

  {
    bookImage: 'https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UY436_FMwebp_QL65_.jpg',
    author: 'Harper Lee',
    title: 'To Kill A Mockingbird'
  }
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return 'hello';
      })}
    </section>
  );
}
// the parameter will point to each and every object in the iteration
// you will see that 'hello' is outputted twice
// that's because you have two items in the book array with the purple curly braces

const Book = (props) => {
  const {bookImage, title, author} = props;

  return (
    <article className="book">
      <img src={bookImage} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));
