import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { categoryDelete, categoryUpdate } from '../../action/category-actions.js';
import CategoryUpdate from '../category-update/categoryUpdate.js';
import ExpenseForm from '../expense-form/expense-form.js';
import ExpenseItem from '../expense-item/expense-item.js';

class CategoryItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: 'default',
    };

    this.editMode = this.editMode.bind(this);
    this.defaultMode = this.defaultMode.bind(this);
  }

  editMode() {
    this.setState({ mode: 'edit' });
  }

  defaultMode() {
    this.setState({ mode: 'default' });
  }

  render() {

    if (this.state.mode === 'default') {
      return (
        <li onDoubleClick={this.editMode}>
          <h2>{this.props.category.name}</h2>
          <p>Budget: ${this.props.category.budget}</p>
          <p>Double-click to update category</p>
          <button onClick={() => this.props.onRemove(this.props.category)}>Delete</button>
          <p>{this.props.category.timestamp}</p>
          <br />
          <section>
            <h3>Fill out an expense below</h3>
            <ExpenseForm buttonText="add category" onComplete={this.props.expenseCreate} category={this.props.category} />
            <h3>Expenses</h3>
            <ul>
              {this.props.expenses.filter(expense => expense.categoryID === this.props.category.id).map(expense => (
                <ExpenseItem key={expense.id} expense={expense} />
              ))}
            </ul>
          </section>
        </li>
      );
    } else {
      return (
        <Fragment>
          <CategoryUpdate
            category={this.props.category}
            onCancel={this.defaultMode}
            onDone={this.defaultMode}
          />
        </Fragment>
      );
    }
  }
}

const mapStateToProps = (state) => ({ expenses: state.expensesState });


const mapDispatchToProps = (dispatch) => ({
  onRemove: category => dispatch(categoryDelete(category)),
  onUpdate: category => dispatch(categoryUpdate(category)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);