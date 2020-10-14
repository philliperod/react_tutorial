import React from 'react';
import ReactDOM from 'react-dom';

// Mini Book Project
// recreating part of Amazon best seller books listing

function BookList() {
  return (
    <section>
      <Book />
    </section>
  );
}
// book list component that has a nested book component which nest a book image component

const Book = () => {
  return (
    <article>
      <BookImage />
      <Title />
      <Author />
    </article>
  );
};
// book component that has a nested book image component

const BookImage = () => <img src="https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UY436_FMwebp_QL65_.jpg" alt="" />;
// book image component

const Title = () => <h1>To Kill a Mockingbird</h1>;
const Author = () => <h4>Harper Lee</h4>;

ReactDOM.render(<BookList />, document.getElementById('root'));
