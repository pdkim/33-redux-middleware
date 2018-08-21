import reducer from './category.js';
import * as actions from '../action/category-actions.js';

let categoryTest = {
  name: 'test',
  budget: '$1',
};

xdescribe('This reducer should', () => {

  it('add a new category', () => {
    const newCategory = reducer([], actions.categoryCreate(categoryTest));
    
    expect(newCategory.length).toBe(1);
    expect(newCategory[0].name).toBe('test');
    expect(newCategory[0].budget).toBe('$1');
    expect(newCategory[0].id).toBeDefined();
  });

  it('update an existing category', () => {

    let newCategory = reducer([], actions.categoryCreate(categoryTest));
    let id = newCategory[0].id;
    let updateTo = {
      id: id,
      name: 'Promotion',
      budget: '$1000',
    };

    newCategory = reducer(newCategory, actions.categoryUpdate(updateTo));

    expect(newCategory[0].id).toBe(id);
    expect(newCategory[0].name).toBe('Promotion');
    expect(newCategory[0].budget).toBe('$1000');
    expect(newCategory.length).toBe(1);
  });

  it('delete an existing category', () => {
    let newCategory = reducer([], actions.categoryCreate(categoryTest));
    newCategory = reducer(newCategory, actions.categoryDelete(newCategory[0]));

    expect(newCategory.length).toEqual(0);
  });
});