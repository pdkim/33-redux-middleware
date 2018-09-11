import React, { Component } from 'react';
import uuid from 'uuid/v4';
import { connect } from 'react-redux';
import { categoryCreate } from '../../action/category-actions.js';

class CategoryForm extends Component {

  constructor(props) {
    super(props);
    this.defaultState = {
      id: '',
      timestamp: '',
      name: '',
      budget: '',
    };
    this.state = { ...this.defaultState };

  }

  onComplete = (event) => {
    event.preventDefault();
    this.props.categoryCreate({ ...this.state, id: uuid(), timestamp: new Date().toLocaleTimeString()});
    this.setState({ ...this.defaultState });
  };

  buttonText = event => {
    const val = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    const changed = {
      [event.target.name]: val,
    };

    this.setState(changed);
  };


  render() {
    return (
      <form onSubmit={this.onComplete} onChange={this.buttonText}>
        <input name="name" placeholder="Name" value={this.state.name} />
        <input name="budget" placeholder="Budget" value={this.state.budget} />
        <button>Submit</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  categoryCreate: category => dispatch(categoryCreate(category)),
});

export default connect(null, mapDispatchToProps)(CategoryForm);