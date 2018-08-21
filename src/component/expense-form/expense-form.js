import React, { Component } from 'react';
import { connect } from 'react-redux';
import { expenseCreate } from '../../action/expense-actions.js';

class ExpenseForm extends Component {

  constructor(props) {
    super(props);
    this.defaultState = {
      id: '',
      categoryID: '',
      timestamp: '',
      name: '',
      price: '',
    };
    this.state = { ...this.defaultState };

  }

  onComplete = event => {
    event.preventDefault();
    let catID = this.props.category.id;
    this.props.expenseCreate({ ...this.state, categoryID: catID });
    this.setState({ ...this.defaultState});
  };

  buttonText = event => {
    const val = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    const changed = {
      [event.target.name]: val,
    };

    this.setState(changed);
  };

  // findPrice = event => {
  //   const priceFound = this.props.categories.filter(category => {
  //     category.id === event.target.value;
  //   });
  //   if(priceFound === undefined || priceFound === null) {
  //     this.setState({price: 'Unavailable'});
  //   } else {
  //     this.setState({price: priceFound.price});
  //   }
  // }


  render() {
    return (
      <form onSubmit={this.onComplete} onChange={this.buttonText}>
        <input name="name" placeholder="Name" value={this.state.name} />
        <input name="price" placeholder="Price" value={this.state.price} />
        <button>Submit</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  expenseCreate: expense => dispatch(expenseCreate(expense))
});

export default connect(null, mapDispatchToProps)(ExpenseForm);