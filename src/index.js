// creating your first component; to achieve that, you need two things:
// 1) Import react dependency and
// 2) A function

import React from 'react';
import ReactDOM from 'react-dom';
// now you want to inject that component into your HTML file; use ReactDOM
// which also had a render method

function Greeting() {
  return <h4>Hello, World. This is first component.</h4>;
}
// for React to understand this is a component, you must capitalize the name of it

ReactDOM.render(<Greeting />, document.getElementById('root'));
// this render method is looking for two things:
// 1) what is the component that it will be rendering and
// 2) where to render it
// you MUST use a self-closing tag for the component
