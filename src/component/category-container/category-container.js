import React from 'react';
import { connect } from 'react-redux';
import { categoryCreate } from '../../action/category-actions.js';

import CategoryForm from '../category-form/category-form.js';
import CategoryItem from '../category-item/category-item.js';

const CategoryContainer = (props) => {
  return (
    <section>
      <h2>Categories</h2>
      <CategoryForm buttonText="add category" onComplete={props.categoryCreate} />
      <h3>Categories</h3>
      <ul>
        {props.categories.map(category => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </ul>
    </section>
  );
};

const mapStateToProps = (state) => ({ categories: state.categoryState });
const mapDispatchToProps = dispatch => {
  return {
    categoryCreate: category => {
      const action = categoryCreate(category);
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);
