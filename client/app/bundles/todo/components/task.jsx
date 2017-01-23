import React, { PropTypes } from 'react';

export default class Task extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      done: this.props.done,
      text: this.props.text,
      wrapped: true,
      creationDate: this.props.creationDate,
      doneDate: this.props.doneDate,
      description: this.props.description,
      removed: this.props.removed
    };

    this.handleChangeDone = this.handleChangeDone.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeWrapped = this.handleChangeWrapped.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleRemoveTask = this.handleRemoveTask.bind(this);
  }

  handleChangeDone() {
    this.setState({
        done: !this.state.done,
        doneDate: this.state.done ? " Soon" : (new Date).toString()
    })
  }

  handleChangeText(event) {
    this.setState({
        text: event.target.value
    })
  }

  handleChangeWrapped() {
    this.setState({
        wrapped: !this.state.wrapped
    })
  }

  handleChangeDescription(event) {
    this.setState({
        description: event.target.value
    })
  }

  handleRemoveTask(){
    this.setState({
        removed: true
    })
  }

  render() {
        return(
              <div className={this.state.done ? "list task done" : "list task"} style={{display: this.state.removed ? 'none' : 'block' }}>
                <input type="checkbox" onChange={this.props.handleChangeDone.bind(this, this)} checked={this.state.done} />
                <div className="text-container">
                  <input type="text" value={this.state.text} onChange={this.props.handleChangeText.bind(this, this)} />
                  <img src={this.state.wrapped ? "/ardwn.svg" : "/arup.svg"} className="arrow" onClick={this.handleChangeWrapped} />
                </div>
                <div className="task-description" style={{display: this.state.wrapped ? 'none' : 'block'}}>
                  <span className="info"> Created: </span>
                  <span>{this.state.creationDate}</span>
                  <br />
                  <a href="#" onClick={this.props.handleRemoveTask.bind(this, this)}>Remove</a>
                  <span className="info"> Done:</span>
                  <span>{this.state.done ? this.state.doneDate : " Soon"}</span>
                  <textarea placeholder="Describe your task..." onChange={this.props.handleChangeDescription.bind(this, this)} value={this.state.description ? this.state.description : "" } />
                </div>
              </div>
        )
  }
}
