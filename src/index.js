import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Props Children
// special property
// located inbetween the HTML tags
// displays whatever you put between those tags when invoking a component

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

function BookList() {
  return (
    <section className="booklist">
      <Book bookImage={firstBook.bookImage} title={firstBook.title} author={firstBook.author}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </Book>
      <Book bookImage={secondBook.bookImage} title={secondBook.title} author={secondBook.author} />
    </section>
  );
}

const Book = (props) => {
  const {bookImage, title, author} = props;
  console.log(props);

  return (
    <article className="book">
      <img src={bookImage} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {props.children}
    </article>
  );
};
// alternate option with using prop children with dot notation

ReactDOM.render(<BookList />, document.getElementById('root'));
