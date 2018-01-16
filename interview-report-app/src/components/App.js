import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';
import MainPage from './MainPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="wrapper">
          <Header />
          <MainPage />
        </div>
          <Footer />
      </div>
    );
  }
}

export default App;
