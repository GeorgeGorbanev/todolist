import React, { PropTypes } from 'react';

export default class NewTaskForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="list new-task">
        <form id="new-task">
          <input type="text" placeholder="What you gonna do?" onKeyDown={this.props.handleNewTask.bind(this)} name="new-task-text" />
        </form>
      </div>
    )
  }
}
