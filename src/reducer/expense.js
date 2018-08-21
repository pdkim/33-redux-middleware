import defaultState from '../component/default/default.js';

export default (state = defaultState, action) => {

  let expenses;
  let { type, payload } = action;

  switch (type) {

    case 'EXPENSE_CREATE':
      expenses = [...state, payload];
      return expenses;
    case 'EXPENSE_UPDATE': return state.map(expenses => expenses.id === payload.id ? payload : expenses);
    case 'EXPENSE_DELETE': return state.filter(expenses => expenses.id !== payload.id);
    case 'EXPENSE_RESET': return defaultState;
    default: return state;
  }
};