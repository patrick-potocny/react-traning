import Overview from './components/Overview'
import React, { Component } from 'react';
import uniqid from 'uniqid'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task: {text: '', id: uniqid()},
      tasks: []
    }

    this.onSubmitHandler = this.onSubmitHandler.bind(this)
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.delFunc = this.delFunc.bind(this)
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.setState({
      task: {text: '', id: uniqid()},
      tasks: this.state.tasks.concat(this.state.task)
    })
  }

  onChangeHandler(event) {
    this.setState({
     task: {text: event.target.value,
            id: this.state.task.id},
    })
  }

  delFunc(event) {
    const indexToDel = this.state.tasks.findIndex(task => task.id === event.target.id)
    this.setState(this.state.tasks.splice(indexToDel, 1))
  }

  render() {
    const {task, tasks} = this.state

    return <div className="App">
      <form onSubmit={this.onSubmitHandler}>
        <label htmlFor="task"><strong>Task </strong></label>
        <input type="text" placeholder="Enter Task" onChange={this.onChangeHandler} name="task" value={task.text} required/>
        <button type="submit">Add +</button>
        <Overview tasks={tasks} delFunc={this.delFunc} />
      </form>
    </div>
  }
}

export default App;
