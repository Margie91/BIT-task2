import React, { Component } from 'react';

import Header from '../common/Header';
import Footer from '../common/Footer';
import MainPage from './MainPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="wrapper">
          <Header />
          <div className="container">
            <MainPage />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
