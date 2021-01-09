import React from 'react';
import Dashboard from './Components/dashboard/Dashboard';
import './App.css';
import Footer from './Components/footer/Footer';
import Card from './Components/card/Card';
import Header from './Components/header/Header';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class App extends React.Component{
  render(){

    return <div className = 'main-content' >
     <Header/>
     <Card/>
     <Footer/>
    </div>
   
  }
}
export default App;
