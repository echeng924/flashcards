import React, { Component } from 'react';

class CardInput extends Component {
  constructor() {
    super();
    this.state = {
      term: '',
      definition: '',
    }
  }
  render() {
    return (
      <div>
        <input
          type="text"
          name="term"
          placeholder="Enter a term"
          value={this.state.term}
        />
        <input
          type="text"
          name="definition"
          placeholder="Enter a definition"
          value={this.state.definition}
        />
        <input
          type="submit"
          value="Post!"
          name="form-button"
        />
      </div>
    );
  }
}

export default CardInput;
