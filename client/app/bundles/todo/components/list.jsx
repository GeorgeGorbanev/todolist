import React, { PropTypes } from 'react';
import Task from './task';

export default class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        <Task text={"Write some tasks"} done={false}
              wrapped={true} creationDate={(new Date).toString()}/>,
        <Task text={"Visit this page"} done={true}
              wrapped={true} creationDate={(new Date).toString()}/>
      ]
    };

    this.handleNewTask = this.handleNewTask.bind(this);
  }

  handleNewTask(event) {
    if (event.keyCode == 13) {
      this.setState({
        tasks: this.state.tasks.concat(
          <Task text={event.target.value} done={false}
                 wrapped={true} creationDate={(new Date).toString()}/>
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
              {this.state.tasks.map(function(task){
                return <li>{task}</li>;
               })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
