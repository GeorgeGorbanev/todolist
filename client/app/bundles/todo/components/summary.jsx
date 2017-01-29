import React, { PropTypes } from 'react';

export default class Summary extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
        return(
              <div className="summary" style={ {display: (this.props.activeTasksCount <= 0) ? 'none' : 'block' }}>
                <span className="actions">

                  <a href="#" onClick={this.props.handleRemoveDone}>Remove done</a>
                  <a href="#" onClick={this.props.handleAllDone}>All done</a>
                </span>
                <span className="summary-done">Done: <b>{this.props.doneCount}</b></span>
                <span className="summary-todo">Todo: <b>{this.props.todoCount}</b></span>
              </div>
        )
  }
}
//<a href="#" onClick={this.props.handleReverse}>Reverse order</a>
