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

    this.handleChangeWrapped = this.handleChangeWrapped.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      done: nextProps.done,
      text: nextProps.text,
      creationDate: nextProps.creationDate,
      doneDate: nextProps.doneDate,
      description: nextProps.description,
      removed: nextProps.removed
    });
  }

  handleChangeWrapped() {
    this.setState({
        wrapped: !this.state.wrapped
    })
  }

  render() {
        return(
              <div className={this.state.done ? "list task done" : "list task"} style={{display: this.state.removed ? 'none' : 'block' }}>
                <input type="checkbox" onChange={this.props.handleChangeDone.bind(this, this)} checked={this.state.done} />
                <div className="text-container">
                  <input type="text" value={this.state.text} onChange={this.props.handleChangeText.bind(this, this)} />
                  <img src={this.state.wrapped ? "/ardwn.svg" : "/arup.svg"} alt={this.state.wrapped ? "V" : "^"} className="arrow" onClick={this.handleChangeWrapped} />
                </div>
                <div className="task-description" style={{display: this.state.wrapped ? 'none' : 'block'}}>
                  <span className="info"> Created: </span>
                  <span className="creation-date">{this.state.creationDate}</span>
                  <br />
                  <a href="#" className="remove-task" onClick={this.props.handleRemoveTask.bind(this, this)}>Remove</a>
                  <span className="info"> Done:</span>
                  <span className="done-date">{this.state.done ? this.state.doneDate : " Soon"}</span>
                  <textarea placeholder="Describe your task..." onChange={this.props.handleChangeDescription.bind(this, this)} value={this.state.description ? this.state.description : "" } />
                </div>
              </div>
        )
  }
}
