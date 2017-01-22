import ReactOnRails from 'react-on-rails'
import React from 'react'
import ReactDOM from 'react-dom'

import Header from '../components/header'
import NewTaskForm from '../components/new_task_form'
import List from '../components/list'
import Task from '../components/task'


export default class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          text: "Visit this page",
          done: true,
          creationDate: (new Date).toString(),
          doneDate: (new Date).toString()
        },
        {
          text: "Write some tasks",
          done: false,
          creationDate: (new Date).toString()
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

  // handleRemoveTask(id, event){
  //   let newState = this.state.tasks.splice(0);
  //   newState.splice(id, 1);
  //   this.setState({ tasks: newState})
  // }

  //handleTasksChange(newTasksState){
  //  this.setState({ tasks: this.state.tasks = newTasksState} )
  //}

  render() {
    return (
      <div>
        <Header />
        <NewTaskForm handleNewTask={this.handleNewTask} />
        <List tasks={this.state.tasks} />
      </div>
    )
  }
}

ReactDOM.render(
  <ToDoApp />,
  document.getElementById('root')
);
