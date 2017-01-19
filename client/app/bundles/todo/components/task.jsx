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
      description: this.props.description
    };

    this.handleChangeDone = this.handleChangeDone.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeWrapped = this.handleChangeWrapped.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
  }


  handleChangeDone() {
    this.setState({
        done: !this.state.done,
        doneDate: (new Date).toString()
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

  render() {
        return(
            <div>
              <div className={this.state.done ? "task done" : "task"}>
                <input type="checkbox" onChange={this.handleChangeDone} checked={this.state.done} />
                <div className="text-container">
                  <input type="text" value={this.state.text} onChange={this.handleChangeText} />
                  <img src={this.state.wrapped ? "/ardwn.svg" : "/arup.svg"}
                       className="arrow" onClick={this.handleChangeWrapped} />
                </div>
                <div className="task-description" style={{display: this.state.wrapped ? 'none' : 'block'}}>
                  <span className="info"> Created: </span>
                  <span>{this.state.creationDate}</span>
                  <a href="#"> Remove</a>
                  <br />
                  <span className="info"> Done:</span>
                  <span>{this.state.doneDate ? this.state.doneDate : " Soon"}</span>
                  <textarea placeholder="Describe your task..." onChange={this.handleChangeDescription} />
                </div>
              </div>
            </div>
          )
  }
}
