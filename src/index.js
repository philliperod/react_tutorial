import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {listings} from './listings';
import Book from './Book';

// Import & Export Statements
// you can import components and even specific objects from components
// to import objects, use curly braces
// (import Book from './Book';) imports the component
// (import {listings} from './listings';) imports the object of the component
// for the export files, you use 'export' in two different ways:
// (export default component's name) if you are exporting the entire component
// (export object's name) if you are exporting a particular object

function BookList() {
  return (
    <section className="booklist">
      {listings.map((book) => {
        return <Book key={listings.id} {...book}></Book>;
      })}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById('root'));
