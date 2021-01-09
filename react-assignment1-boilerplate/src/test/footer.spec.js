import Footer from '../Components/footer/Footer';
// please add your test cases here
import React from 'react';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer/>, div);
});
export default Footer;