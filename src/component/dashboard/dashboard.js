import React, {Component, Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import CategoryContainer from '../category-container/category-container.js';


class Dashboard extends Component {

  render() {

    return (

      <Fragment>
        <nav>
          <ul>
            <li>
              <NavLink className="link" exact to="/">Dashboard</NavLink>
            </li>
          </ul>
        </nav>
        <CategoryContainer />
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  categories: state,
});

export default connect(mapStateToProps)(Dashboard);