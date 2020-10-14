import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Props

// setup variables
const title = 'To Kill A Mockingbird';
const author = 'Harper Lee';
const bookImage = 'https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UY436_FMwebp_QL65_.jpg';

function BookList() {
  return (
    <section className="booklist">
      <Book job="developer" />
      <Book />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={bookImage} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};
// the props parameter will be passed as an object
// since it is an object, you can access it
// in order to pass this object, you need to go where it is render (BookList)
//

ReactDOM.render(<BookList />, document.getElementById('root'));
