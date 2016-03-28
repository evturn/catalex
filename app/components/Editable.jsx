import React, { Component } from 'react';
import { updateLane } from '../actions/lane';

export default class Editable extends Component {
  render() {
    const {value, lane, dispatch, onValueClick, editing, ...props} = this.props;
    console.log(editing);
    return (
      <div {...props}>
        {editing ? this.renderEdit() : this.renderValue()}
      </div>
    );
  }
  renderEdit = () => {
    return <input
      type="text"
      ref={(e) => e ? e.selectionStart = this.props.value.length : null}
      autoFocus={true}
      placeholder={this.props.value}
      onBlur={e => dispatch(updateLane(e, lane))}
      onKeyPress={this.checkEnter}
    />;
  };
  renderValue = () => {
    const onDelete = this.props.onDelete;

    return (
      <div onClick={this.props.onValueClick}>
        <span className="value">{this.props.value}</span>
        {onDelete ? this.renderDelete() : null } </div>
    );
  };
  renderDelete = () => {
    return <button className="delete" onClick={this.props.onDelete}>x</button>;
  };
  checkEnter = (e) => {
    if (e.key === 'Enter') {
      this.finishEdit(e);
    }
  };
  finishEdit = (e) => {
    const value = e.target.value;

    if (this.props.onEdit && value.trim()) {
      this.props.onEdit(value);
    }
  };
}