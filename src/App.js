import React from 'react';
//import './App.css';
import Form from './component/Form'
import ToDoList from './component/ToDoList'

class App extends React.Component {  
  state = { 
    toDo: []
   }

  componentDidMount() {
    fetch('http://localhost:3000/todos')
      .then(resp => resp.json())
      .then(data => {
        this.setState({ toDo: data });
      })
  }

makeANewToDo = (newToDo) => {
  fetch('http://localhost:3000/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      todo: newToDo
    })
  })
    .then(resp => resp.json())
    .then(data => {
      this.setState({ toDo: [...this.state.toDo, data] });
    })
  
}

completeToDo = (id) => {
fetch('http://localhost:3000/todos/'+id, { method: "DELETE"})
  .then(resp => resp.json())
  .then(data => {
    this.componentDidMount()
  })
}


  render() { 
    return ( 
      <div className="App">
      <Form makeANewToDo={this.makeANewToDo}/>
      <ToDoList toDo={this.state.toDo} completeToDo={this.completeToDo}/>
    </div>
     );
  }
}
 
export default App;
