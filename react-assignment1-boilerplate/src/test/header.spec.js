import Header from '../Components/header/Header';
// please add your test cases here
import ReactDOM from 'react-dom';
import React from 'react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header/>, div);
});
export default Header;