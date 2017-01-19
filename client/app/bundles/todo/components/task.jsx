import React, { PropTypes } from 'react';

export default class Task extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      done: this.props.done,
      text: this.props.text,
      wrapped: this.props.wrapped
    };

    this.handleChangeDone = this.handleChangeDone.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeWrapped = this.handleChangeWrapped.bind(this);
  }


  handleChangeDone() {
    this.setState({
        done: !this.state.done
    })
  }

  handleChangeText(event) {
    this.setState({
        text: event.target.value
    })
  }

  handleChangeWrapped(event) {
    this.setState({
        wrapped: !this.state.wrapped
    })
  }

  render() {
        return(
            <li>
              <div className={this.state.done ? "task done" : "task"}>
                  <input type="checkbox" onChange={this.handleChangeDone} checked={this.state.done} />
                  <div className="text-container">
                    <input type="text" value={this.state.text} onChange={this.handleChangeText} />
                      <img src={this.state.wrapped ? "/ardwn.svg" : "/arup.svg"}
                           className="arrow" onClick={this.handleChangeWrapped} />                    
                  </div>
              </div>
            </li>
          )
  }
}
