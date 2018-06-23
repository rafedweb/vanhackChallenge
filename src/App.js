import React, { Component } from 'react';

import './App.css';
import Router from './components/router';
import Header from './components/header';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router />
        <Footer />
      </div>
    );
  }
}

export default App;
