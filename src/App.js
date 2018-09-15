import React, { Component } from 'react';
import BoardContainer from './components/BoardContainer';
import Header from './layout/Header';
import Footer from './layout/Footer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <BoardContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
