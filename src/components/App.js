import React, { Component } from 'react';
import Header from './Header/Header';
import ContentDisplay from './Content/ContentDisplay';
import Footer from './Footer/Footer';
import './Header/Header.css';

class App extends Component {
  render() {
    return (
          <div className="app" style={{backgroundColor: '#000', color: '#fff', width: '100vw'}}>
            <Header />
            <ContentDisplay />
            <Footer />
          </div>
    );
  }
}

export default App;
