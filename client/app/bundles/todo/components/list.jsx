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
                        <Task text={task.text}
                              done={task.done}
                              creationDate={task.creationDate}
                              doneDate={task.doneDate}
                              removed={task.removed} />
                      </li>
                    )}, this)
                }
            </ul>
      </div>
    )
  }
}
