import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Event Basics

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

const Book = ({bookImage, title, author}) => {
  const clickHandler = () => {
    alert('hello world');
  };
  const complexHandler = (author) => {
    console.log(author);
  };
  // if you're looking to pass a particular object then you can insert it as a parameter
  // what happens as of right now, you invoke the function and it will output all values
  // for that property

  return (
    <article className="book">
      <img src={bookImage} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Reference Example
      </button>
      <button type="button" onClick={complexHandler(author)}>
        Complex Example
      </button>
    </article>
  );
};
// how to setup an eventListener
// you need to setup the attribute and eventHandler
// must be in camelCase - onClick, onMouseOver
// you can pass the eventHandlers as a reference (setting it up as a function) or inline

function BookList() {
  return (
    <section className="booklist">
      {listings.map((book) => {
        return <Book key={listings.id} {...book}></Book>;
      })}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById('root'));
