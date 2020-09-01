import React, { Component } from 'react'

export default class ToDoItem extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.task.todo}</h3>
                <button onClick={() => this.props.completeToDo(this.props.task.id)}>Done</button>
            </div>
        )
    }
}

