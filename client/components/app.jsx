import React, { Component } from 'react';
import request from 'superagent';
import CardList from './cardList.jsx';
import CardInput from './cardInput.jsx';

class App extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div>
        <CardInput />
        <CardList />
      </div>
    );
  }
}

export default App;
