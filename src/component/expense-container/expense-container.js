import React from 'react';
import { connect } from 'react-redux';
import { expenseCreate } from '../../action/category-actions.js';

import ExpenseForm from '../category-form/category-form.js';
import ExpenseItem from '../category-item/category-item.js';

const ExpenseContainer = (props) => {
  return (
    <section>
      <h3>Fill out an expense below</h3>
      <ExpenseForm buttonText="add category" state={props.expenses} onComplete={props.expenseCreate} />
      <h3>Expenses</h3>
      <ul>
        {props.expenses.map(expense => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
      </ul>
    </section>
  );
};

const mapStateToProps = (state) => ({ expenses: state.expenseState });
const mapDispatchToProps = dispatch => {
  return {
    expenseCreate: expense => {
      const action = expenseCreate(expense);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseContainer);
