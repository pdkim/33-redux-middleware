export default  store => next => action => {
  console.log('Original State: ', store.getState());
  console.log('Action Type: ', action.type);
  let result = next(action);
  console.log('New State: ', store.getState());
  return result;
};