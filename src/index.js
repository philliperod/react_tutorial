import React from 'react';
import ReactDOM from 'react-dom';

// *JSX Rules
// *return single element
// *div / section / article or fragment
// *use camelCase for html attribute
// *className instead of class
// *close every element
// formatting

function Greeting() {
  return (
    <div className="proper__class">
      <h3>Hello World</h3>
      <ul>
        <li>
          <a href="#">Hello Moon</a>
        </li>
        <img src="" alt="" />
      </ul>
    </div>
  );
}
// add the self-closing tag to prevent an error for your component

ReactDOM.render(<Greeting />, document.getElementById('root'));
