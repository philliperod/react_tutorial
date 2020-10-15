import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Kep Prop & Spread Operator
// React always want to keep a track of what is being add or remove
// every time you have list, you need to add a key prop for each item that is returned
// you need to setup a key prop with a unique values

const listings = [
  {
    id: 1,
    bookImage: 'https://m.media-amazon.com/images/I/81V8ozIJTVL._AC_UY436_FMwebp_QL65_.jpg',
    title: 'White Fragility',
    author: 'Robin DiAngelo'
  },

  {
    id: 2,
    bookImage: 'https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UY436_FMwebp_QL65_.jpg',
    title: 'To Kill A Mockingbird',
    author: 'Harper Lee'
  },

  {
    id: 3,
    bookImage: 'https://m.media-amazon.com/images/I/71LPo9FucCL._AC_UY436_FMwebp_QL65_.jpg',
    title: 'Of Mice and Men',
    author: 'John Steinbeck'
  }
];

const Book = (props) => {
  console.log(props);

  const {bookImage, title, author} = props.book;

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
        return <Book key={listings.id} book={book}></Book>;
      })}
    </section>
  );
}
// how to access it is simply entering the array with its key value

ReactDOM.render(<BookList />, document.getElementById('root'));
