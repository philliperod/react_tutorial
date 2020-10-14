import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Simple List
// a simplier approach for the objects below is putting them in an array
// then you can iterate over that array for each object

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

const Book = (props) => {
  // const {bookImage, title, author} = props;
  const {bookImage, title, author, children} = props;

  return (
    <article className="book">
      <img src={bookImage} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {/* {props.children} */}
      {children}
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));
