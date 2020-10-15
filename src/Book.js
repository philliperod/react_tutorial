import React from 'react';

const Book = ({bookImage, title, author}) => {
  const clickHandler = (event) => {
    console.log(event);
    console.log(event.target);
  };

  const complexHandler = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={bookImage} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Reference Examples
      </button>
      <button type="button" onClick={() => complexHandler(author)}>
        Complex Examples
      </button>
    </article>
  );
};

export default Book;
