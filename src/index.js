import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Proper List

const listings = [
  {
    bookImage: 'https://m.media-amazon.com/images/I/81V8ozIJTVL._AC_UY436_FMwebp_QL65_.jpg',
    title: 'White Fragility',
    author: 'Robin DiAngelo'
  },

  {
    bookImage: 'https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UY436_FMwebp_QL65_.jpg',
    title: 'To Kill A Mockingbird',
    author: 'Harper Lee'
  },

  {
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
        return <Book book={book}></Book>;
      })}
    </section>
  );
}
// question to ask is how to pass in the props now in BookList to show on our page?
// one is individually adding each prop in the Book component in BookListing
// REMINDER that you already destructured the object in the Book component
// so instead of passing each prop one by one in another object created in the map method
// you can pass a book prop that will equal to a book
// you were looking for the book object and pass it as a prop within the BookList
// in your Book component, props will have the properties as the value and
// just setup the props and the property you are looking for - props.book
// now you are iterating over your array and for each object you're returning that Book component

ReactDOM.render(<BookList />, document.getElementById('root'));
