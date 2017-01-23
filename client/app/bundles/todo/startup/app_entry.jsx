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
    if (!window.localStorage.tasks)
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
    else
      this.state ={
         tasks: localStorage.tasks ? JSON.parse(localStorage.tasks) : []
      }
    this.handleNewTask    = this.handleNewTask.bind(this);

    this.handleRemoveTask = this.handleRemoveTask.bind(this);
    this.handleChangeDone = this.handleChangeDone.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
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

  handleRemoveTask(task){
    let newState = this.state.tasks.splice(0);
    newState[task.props.itemKey]["removed"] = true;
    this.setState({
        tasks: newState
    })
    task.handleRemoveTask();
  }

  handleChangeDone(task){
    let newState = this.state.tasks.splice(0);
    newState[task.props.itemKey]["done"] = !newState[task.props.itemKey]["done"];
    newState[task.props.itemKey]["doneDate"] = newState[task.props.itemKey]["done"] ? (new Date).toString() : " Soon";
    this.setState({
        tasks: newState
    })
    task.handleChangeDone();
  }

  handleChangeText(task, e){
     let newState = this.state.tasks.splice(0);
     newState[task.props.itemKey]["text"] = e.target.value;
     this.setState({
         tasks: newState
     })
    task.handleChangeText(e);
  }

  handleChangeDescription(task, e){
     let newState = this.state.tasks.splice(0);
     newState[task.props.itemKey]["description"] = e.target.value;
     this.setState({
         tasks: newState
     })
    task.handleChangeDescription(e);
  }

  render() {
    localStorage.tasks = JSON.stringify(this.state.tasks);
    return (
      <div>
        <Header />
        <NewTaskForm handleNewTask={this.handleNewTask} />
        <List tasks={this.state.tasks}
              handleRemoveTask={this.handleRemoveTask}
              handleChangeDone={this.handleChangeDone}
              handleChangeText={this.handleChangeText}
              handleChangeDescription={this.handleChangeDescription} />
      </div>
    )
  }
}

ReactDOM.render(
  <ToDoApp />,
  document.getElementById('root')
);
