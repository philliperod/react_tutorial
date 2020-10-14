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
const Author = () => <h4 style={{color: '#617d98'}}>Harper Lee</h4>;
// in order to setup values for this style, you need to put it as a javascript object within 2 curly braces
// each property will be setup as javascript values
// first curly braces tells it is going to be javascript
// second curly braces tells it is the object with values
// values for a property will need to be put in quotation because it has to be seen as a javascript value

ReactDOM.render(<BookList />, document.getElementById('root'));
