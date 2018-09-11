import React, { Component } from 'react';
import { connect } from 'react-redux';
import { expenseUpdate } from '../../action/expense-actions.js';

class ExpenseUpdate extends Component {

  constructor(props) {
    super(props);
    this.state = { ...props.expense };
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.onDone();
    this.props.expenseUpdate(this.state);
    this.updateTime();
  };

  onCancel = () => this.props.onCancel();

  onChange = event => {
    const val = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    const changed = {
      [event.target.name]: val,
    };
    this.setState(changed);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} onChange={this.onChange}>
        <input name="name" placeholder="name" value={this.state.name} />
        <input name="price" placeholder="price" value={this.state.price} />
        <button>Update</button>
        <button type="button" onClick={this.onCancel}>Cancel</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  expenseUpdate: expense => dispatch(expenseUpdate(expense)),
});

export default connect(null, mapDispatchToProps)(ExpenseUpdate);