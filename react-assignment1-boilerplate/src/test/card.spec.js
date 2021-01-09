import Card from '../Components/card/Card';
// please add your test cases here
import React from 'react';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card/>, div);
});

export default Card;