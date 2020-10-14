import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Props Destructuring

const firstBook = {
  bookImage: 'https://m.media-amazon.com/images/I/81V8ozIJTVL._AC_UY436_FMwebp_QL65_.jpg',
  author: 'Robin DiAngelo',
  title: 'White Fragility'
};

const secondBook = {
  bookImage: 'https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UY436_FMwebp_QL65_.jpg',
  author: 'Harper Lee',
  title: 'To Kill A Mockingbird'
};

function BookList() {
  return (
    <section className="booklist">
      <Book bookImage={firstBook.bookImage} title={firstBook.title} author={firstBook.author} />
      <Book bookImage={secondBook.bookImage} title={secondBook.title} author={secondBook.author} />
    </section>
  );
}

const Book = ({bookImage, title, author}) => {
  // const {bookImage, title, author} = props;

  return (
    <article className="book">
      <img src={bookImage} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};
// you can destructure the object for a more simplier solution to pass them

ReactDOM.render(<BookList />, document.getElementById('root'));
