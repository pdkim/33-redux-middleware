import React, { Component } from 'react';
import { connect } from 'react-redux';
import { categoryUpdate } from '../../action/category-actions.js';

class CategoryUpdate extends Component {

  constructor(props) {
    super(props);
    this.state = { ...props.category };
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.onDone();
    this.props.categoryUpdate(this.state);
    this.updateTime();
  };

  updateTime = () => {
    let newTime  = new Date().toLocaleTimeString();
    this.setState({timestamp: newTime});
  }

  onCancel = () => this.props.onCancel();

  onChange = event => {
    const val = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    const changed = {
      [event.target.name]: val,
    };
    this.setState(changed);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} onChange={this.onChange}>
        <input name="name" placeholder="name" value={this.state.name} />
        <input name="budget" placeholder="budget" value={this.state.budget} />
        <button>Update</button>
        <button type="button" onClick={this.onCancel}>Cancel</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  categoryUpdate: category => dispatch(categoryUpdate(category))
});

export default connect(null, mapDispatchToProps)(CategoryUpdate);