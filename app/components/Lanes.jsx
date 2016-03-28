import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Lane from './Lane';

class Lanes extends Component {
  render() {
    const { lanes } = this.props;

    return (
      <div className="lanes">{lanes.map(lane =>
        <Lane className="lane" key={lane.id} {...lane} />
      )}</div>
    );
  }
}

export default connect(
  state => ({
    lanes: state.lane.lanes,
    notes: state.note.notes
  })
)(Lanes);