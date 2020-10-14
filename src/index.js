import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// JSX Javascript

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const Book = () => {
  const title = 'To Kill A Mockingbird';
  const author = 'Harper Lee';
  // basically using variable values in your JSX
  // which are within curly braces
  // rule that must apply:
  // using javascript in JSX, it must return a value and not a statement

  return (
    <article className="book">
      <img src="https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UY436_FMwebp_QL65_.jpg" alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));
