import defaultState from '../component/default/default.js';

export default (state = defaultState, action) => {

  let categories;
  let { type, payload } = action;

  switch (type) {

    case 'CATEGORY_CREATE':
      categories = [...state, payload];
      return categories;
    case 'CATEGORY_UPDATE': return state.map(category => category.id === payload.id ? payload : category);
    case 'CATEGORY_DESTROY': return state.filter(category => category.id !== payload.id);
    case 'CATEGORY_RESET': return defaultState;
    default: return state;
  }
};