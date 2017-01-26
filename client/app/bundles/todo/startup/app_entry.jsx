import ReactOnRails from 'react-on-rails'
import React from 'react'
import ReactDOM from 'react-dom'

import Header from '../components/header'
import NewTaskForm from '../components/new_task_form'
import List from '../components/list'
import Task from '../components/task'
import Summary from '../components/summary'


export default class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    if (window.localStorage.length != 4)
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
        ],
        activeTasksCount: 2,
        doneCount: 1,
        todoCount: 1
      }
    else
      this.state ={
         tasks: window.localStorage.tasks ? JSON.parse(window.localStorage.tasks) : [],
         activeTasksCount: JSON.parse(localStorage.activeTasksCount),
         doneCount: JSON.parse(localStorage.doneCount),
         todoCount: JSON.parse(localStorage.todoCount)
      }
    this.handleNewTask = this.handleNewTask.bind(this);

    this.handleRemoveTask        = this.handleRemoveTask.bind(this);
    this.handleChangeDone        = this.handleChangeDone.bind(this);
    this.handleChangeText        = this.handleChangeText.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);

    this.handleAllDone = this.handleAllDone.bind(this);
  }

  handleNewTask(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      this.setState({
        tasks: this.state.tasks.concat(
              {
                text: event.target.value,
                done: false,
                creationDate: (new Date).toString()
              }),
        activeTasksCount: this.state.activeTasksCount + 1,
        todoCount:        this.state.todoCount + 1
     })
     event.target.value = "";
    }
  }

  handleRemoveTask(task){
    let newState = this.state.tasks.splice(0);
    newState[task.props.itemKey]["removed"] = true;
    this.setState({
        tasks: newState,
        activeTasksCount: this.state.activeTasksCount - 1,
        todoCount: newState[task.props.itemKey]["done"] ? this.state.todoCount : this.state.todoCount - 1,
        doneCount: newState[task.props.itemKey]["done"] ? this.state.doneCount - 1 : this.state.doneCount
    })
  }

  handleChangeDone(task){
    let newState = this.state.tasks.splice(0);
    newState[task.props.itemKey]["done"] = !newState[task.props.itemKey]["done"];
    newState[task.props.itemKey]["doneDate"] = newState[task.props.itemKey]["done"] ? (new Date).toString() : " Soon";
    this.setState({
        tasks: newState,
        todoCount: newState[task.props.itemKey]["done"] ? this.state.todoCount - 1 : this.state.todoCount + 1,
        doneCount: newState[task.props.itemKey]["done"] ? this.state.doneCount + 1 : this.state.doneCount - 1
    })
  }

  handleChangeText(task, e){
     let newState = this.state.tasks.splice(0);
     newState[task.props.itemKey]["text"] = e.target.value;
     this.setState({
         tasks: newState
     })
  }

  handleChangeDescription(task, e){
     let newState = this.state.tasks.splice(0);
     newState[task.props.itemKey]["description"] = e.target.value;
     this.setState({
         tasks: newState
     })
  }

  handleAllDone(){
    let newDoneCount = this.state.doneCount;
    let newTasks     = this.state.tasks.map((task)=>{
      if (task.done == true)
        return task;
      else{
        task.done = true;
        task.doneDate = (new Date).toString();
        newDoneCount += 1;
        return task;
      }
    });
    this.setState({
      tasks: newTasks,
      doneCount: newDoneCount,
      todoCount: 0
    })
  }

  render() {
    localStorage.tasks = JSON.stringify(this.state.tasks);
    localStorage.activeTasksCount = JSON.stringify(this.state.activeTasksCount);
    localStorage.doneCount = JSON.stringify(this.state.doneCount);
    localStorage.todoCount = JSON.stringify(this.state.todoCount);
    return (
      <div>
        <Header />
        <NewTaskForm handleNewTask={this.handleNewTask} />
        <List tasks={this.state.tasks}
              handleRemoveTask={this.handleRemoveTask}
              handleChangeDone={this.handleChangeDone}
              handleChangeText={this.handleChangeText}
              handleChangeDescription={this.handleChangeDescription} />
        <Summary todoCount={this.state.todoCount} doneCount={this.state.doneCount} handleAllDone={this.handleAllDone.bind(this)}/>
      </div>
    )
  }
}

ReactDOM.render(
  <ToDoApp />,
  document.getElementById('root')
);
