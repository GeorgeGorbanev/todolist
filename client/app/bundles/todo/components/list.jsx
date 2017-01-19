import React, { PropTypes } from 'react';
import Task from './task';

export default class List extends React.Component {
  render() {
    return (
      <div className="todolist">
        <div className="header">
          <h1> Todo: </h1>
        </div>
        <div id="list">
          <div id="new-task">
            <input type="text" placeholder="What you gonna do?" />
          </div>
          <div id="last-tasks-page">
            <ul>
              <Task text={"Write some tasks"} done={false} wrapped={true} />
              <Task text={"Visit this page"} done={true} wrapped={true} />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
