
import React, { Component } from 'react'

export default class TodoForm extends Component {
    constructor(){
        super()
        this.state = {
            tasks: []
        }
    }

    addTask = (event) => {
        event.preventDefault()
        const task = event.target.task.value
        this.setState({
            tasks: task
        })
        console.log(task)

    }
  render() {
    return (
        <form onSubmit={this.addTask} className="TodoForm">
        <input name= "task" type="text" className="todo-input" placeholder="What would you like to get done today?"></input>
        <button type="submit" className="btn">Add Task</button>
    </form>
  )

  }
}


