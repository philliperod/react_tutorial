import React from 'react';
import ReactDOM from 'react-dom';

// Nested Components
// React Tools

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

// how to use nested components (traditional way)
// you can create multiple functions/components
// and insert them like an html tag like above; MUST use self-closing tags

const Person = () => <h2>Phil Rod</h2>;
const Message = () => {
  return <p>This is my message</p>;
};

ReactDOM.render(<Greeting />, document.getElementById('root'));
