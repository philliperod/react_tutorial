import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// CSS JSX

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
const Author = () => <h4>Harper Lee</h4>;

ReactDOM.render(<BookList />, document.getElementById('root'));
