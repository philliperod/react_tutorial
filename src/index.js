import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Props

// setup variables
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
// refactored previous variables into objects that can be passed
// this will allow to setup proper props

function BookList() {
  return (
    <section className="booklist">
      <Book bookImage={firstBook.bookImage} title={firstBook.title} author={firstBook.author} />
      <Book bookImage={secondBook.bookImage} title={secondBook.title} author={secondBook.author} />
    </section>
  );
}
// bookImage={} is the property value which will be equal to
// {firstBook.bookImage} which is the object name-value pair

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.bookImage} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};
// make sure the props you are passing match within the component
// ultimately making this dynamic
// props will refer to the object

ReactDOM.render(<BookList />, document.getElementById('root'));
