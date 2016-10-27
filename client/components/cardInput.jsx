import React, { Component } from 'react';
import request from 'superagent';

class CardInput extends Component {
  constructor() {
    super();
    this.state = {
      term: '',
      definition: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const name = target.getAttribute('name');
    const value = target.value;
    const updated = {};
    updated[name] = value;
    this.setState(updated);
  }

  httpPostToDb() {
    request.post('/api/terms')
           .send({
              term: this.state.term,
              definition: this.state.definition,
           })
           .then(() => {
              console.log('term was submitted');
           });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.httpPostToDb();
    this.setState({
      term: '',
      definition: '',
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="term"
            placeholder="Enter a term"
            value={this.state.term}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="definition"
            placeholder="Enter a definition"
            value={this.state.definition}
            onChange={this.handleInputChange}
          />
          <input
            type="submit"
            value="Post!"
            name="form-button"
          />
        </form>
      </div>
    );
  }
}

export default CardInput;
