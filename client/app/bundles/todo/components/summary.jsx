import React, { PropTypes } from 'react';

export default class Task extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
        return(
              <div className="summary" style={ {display: (this.state.activeTasksNumber == 0) ? 'none' : 'block' }}>
                <span className="actions">
                  <a href="#"> Remove all done</a>
                  <a href="#"> Done all</a>
                </span>
                <span className="summary-done">Done: {this.props.doneCount}</span>
                <span className="summary-todo">Todo: {this.props.todoCount}</span>
              </div>
        )
  }
}
