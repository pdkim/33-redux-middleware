import React, { Component } from 'react';
import { connect } from 'react-redux';
import { expenseDelete, expenseUpdate } from '../../action/expense-actions.js';
import ExpenseUpdate from '../expense-update/expense-update.js';

class ExpenseItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      redo: false,
    };

  }

  redoStart = () => {
    this.setState({redo: true});
  }

  redoDone = () => {
    this.setState({redo: false});
  }

  render() {

    if (this.state.redo === false) {
      return (
        <li>
          <h2>{this.props.expense.name}</h2>
          <p>Price: ${this.props.expense.price}</p>
          <button onClick={() => this.props.onRemove(this.props.expense)}>Delete</button>
          <button onClick={this.redoStart}>Edit</button>
          <p>{this.props.expense.timestamp}</p>
        </li>
      );
    } else {
      return (
        <ExpenseUpdate
          expense={this.props.expense}
          onCancel={this.redoDone}
          onDone={this.redoDone}
        />
      );
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  onRemove: expense => dispatch(expenseDelete(expense)),
  onUpdate: expense => dispatch(expenseUpdate(expense)),
});

export default connect(null, mapDispatchToProps)(ExpenseItem);