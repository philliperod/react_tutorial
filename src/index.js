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
// this will be the first component that will handle the section of the book listing
// it will have multiple components inside that will display each part of the listing such as:
// book, image, title, author

const Book = () => {
  return <article>This is a book.</article>;
};
// this is the second component that will handle the book nested inside the first component

ReactDOM.render(<BookList />, document.getElementById('root'));
