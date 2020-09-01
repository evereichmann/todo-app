import React from 'react';
import ToDoItem from './ToDoItem'

class ToDoList extends React.Component {
    //state = {  }
    renderToDo = () => {
        return this.props.toDo.map((task) => {
            return < ToDoItem task={task} completeToDo={this.props.completeToDo}/>
        })
    }

    render() { 
        return ( 
            <div>
                <h1>ToDoList</h1>
                { this.renderToDo() }
            </div>
         );
    }
}
 
export default ToDoList;

