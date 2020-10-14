import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// CSS JSX
// you can add CSS styles directly with JSX
// in order to do that you need to add a style attribute for that particular element

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <BookImage />
      <Title />
      <Author />
    </article>
  );
};

const BookImage = () => <img src="https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UY436_FMwebp_QL65_.jpg" alt="" />;

const Title = () => <h1>To Kill a Mockingbird</h1>;
const Author = () => <h4 style={{color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>Harper Lee</h4>;
// when you have a CSS property with multiple words then you must use camelCase

ReactDOM.render(<BookList />, document.getElementById('root'));
