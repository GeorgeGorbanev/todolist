import React, { PropTypes } from 'react';
import Task from './task';

export default class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        {
          text: "Write some tasks",
          done: false,
          creationDate: (new Date).toString()
        },
        {
          text: "Visit this page",
          done: true,
          creationDate: (new Date).toString(),
          doneDate: (new Date).toString()
        }
      ]
    }
    this.handleNewTask = this.handleNewTask.bind(this);
  }

  handleNewTask(event) {
    if (event.keyCode == 13) {
      this.setState({
        tasks: this.state.tasks.concat(
              {
                text: event.target.value,
                done: false,
                creationDate: (new Date).toString()
              }
       )
     })
     event.target.value = "";
    }
  }

  render() {
    return (
      <div className="todolist">
        <div className="header">
          <h1>Todo: </h1>
        </div>
        <div id="list">
          <div id="new-task">
            <input type="text" placeholder="What you gonna do?" onKeyDown={this.handleNewTask} />
          </div>
          <div id="last-tasks-page">
            <ul>
                { this.state.tasks.map(function(task, key){
                  key += 1;
                  return (<li key={key}>
                          <Task text={task.text}
                          done={task.done}
                          creationDate={task.creationDate}
                          doneDate={task.doneDate}
                          key={key} />
                  </li>)})}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
