import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Proper List

const listings = [
  {
    bookImage: 'https://m.media-amazon.com/images/I/81V8ozIJTVL._AC_UY436_FMwebp_QL65_.jpg',
    title: 'White Fragility',
    author: 'Robin DiAngelo'
  },

  {
    bookImage: 'https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UY436_FMwebp_QL65_.jpg',
    title: 'To Kill A Mockingbird',
    author: 'Harper Lee'
  },

  {
    bookImage: 'https://m.media-amazon.com/images/I/71LPo9FucCL._AC_UY436_FMwebp_QL65_.jpg',
    title: 'Of Mice and Men',
    author: 'John Steinbeck'
  }
];

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

function BookList() {
  return (
    <section className="booklist">
      {listings.map((book) => {
        const {bookImage, title, author} = book;
        return (
          <div>
            <img src={bookImage} alt="" />≈<h3>{title}</h3>
            <h6>{author}</h6>
          </div>
        );
        // return <Book book={book}></Book>;
      })}
    </section>
  );
}
// question to ask: how to pass the Book(props) in BookList?
// previously, you could destructure another object in BookList
// which would be in listings.map(book) which would equal book
// then use those props inbetween html tags within curly braces

ReactDOM.render(<BookList />, document.getElementById('root'));
