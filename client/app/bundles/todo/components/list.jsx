import React, { PropTypes } from 'react';
import Task from './task';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: this.props.tasks
    }
  }

  render() {
    return (
      <div className="list">
            <ul>
                {this.props.tasks.map((task, key)=>{
                    return (
                      <li key={key}>
                        <Task itemKey={key}
                              text={task.text}
                              done={task.done}
                              creationDate={task.creationDate}
                              doneDate={task.doneDate}
                              description={task.description}
                              removed={task.removed}
                              handleRemoveTask={this.props.handleRemoveTask}
                              handleChangeDone={this.props.handleChangeDone}
                              handleChangeText={this.props.handleChangeText}
                              handleChangeDescription={this.props.handleChangeDescription}/>
                      </li>
                    )}, this)
                }
            </ul>
      </div>
    )
  }
}
