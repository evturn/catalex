import React, { Component } from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import ItemTypes from '../constants/itemTypes';

const noteSource = {
  beginDrag(props) {
    console.log('NOTE_LIFTED');

    return {
      id: props.id
    };
  }
};

const noteTarget = {
  hover(targetProps, monitor) {
    const targetId = targetProps.id;
    const sourceProps = monitor.getItem();
    const sourceId = sourceProps.id;

    if (sourceId !==  targetId) {
      targetProps.onMove({ sourceId, targetId });
    }
  }
};

@DragSource(ItemTypes.NOTE, noteSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))
@DropTarget(ItemTypes.NOTE, noteTarget, (connect) => ({
  connectDropTarget: connect.dropTarget()
}))
export default class Note extends Component {
  render() {
    const {
      connectDragSource, onMove, isDragging,
      connectDropTarget, id, ...props
    } = this.props;

    return connectDragSource(connectDropTarget(
      <li
        style={{opacity: isDragging ? 0 : 1}}
        {...props}>
        {props.children}
      </li>
    ));
  }
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     editing: false
  //   };
  // }
  // render() {
  //   if(this.state.editing) {
  //     return this.renderEdit();
  //   }

  //   return this.renderNote();
  // }
  // renderEdit = () => {
  //   return <input type="text"
  //     autoFocus={true}
  //     placeholder={this.props.task}
  //     onBlur={this.finishEdit}
  //     onKeyPress={this.checkEnter} />;
  // };
  // renderDelete = () => {
  //   return <button
  //     className="delete"
  //     onClick={this.props.onDelete}>x</button>;
  // };
  // renderNote = () => {
  //   const onDelete = this.props.onDelete;

  //   return (
  //     <div onClick={this.edit}>
  //       <span className="value">{this.props.task}</span>
  //       {onDelete ? this.renderDelete() : null }
  //     </div>
  //   );
  // };
  // edit = () => {
  //   this.setState({
  //     editing: true
  //   });
  // };
  // checkEnter = (e) => {
  //   if(e.key === 'Enter') {
  //     this.finishEdit(e);
  //   }
  // };
  // finishEdit = (e) => {
  //   if(this.props.onEdit) {
  //     this.props.onEdit(e.target.value);
  //   }

  //   this.setState({
  //     editing: false
  //   });
  // };
}