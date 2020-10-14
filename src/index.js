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
  return (
    <article className="book">
      <img src="https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UY436_FMwebp_QL65_.jpg" alt="" />
      <h1>To Kill a Mockingbird</h1>
      <h4>Harper Lee</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));
