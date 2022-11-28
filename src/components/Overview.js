import React from "react";
import { Component } from "react";

class Overview extends Component {
  render() {
    return (
      <div className="Overview">
        <p>Tasks:</p>
        <ul>
          {this.props.tasks.map((task, i) => {
            const delFunc = this.props.delFunc;
            return (
              <li key={task.id}>
                {i + 1} {task.text}{" "}
                <button id={task.id} type="button" onClick={delFunc}>
                  DEL
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Overview;
