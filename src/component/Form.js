import React from 'react';

class Form extends React.Component {
    state = { 
        newToDo: ''
     }

     handleChange = (e) => {
        this.setState({ newToDo: e.target.value })
     }

    render() { 
        return (
            <div>
                <input type="text" placeholder="to do" onChange={this.handleChange} />
                <button onClick={() => this.props.makeANewToDo(this.state.newToDo)}>New</button>
            </div>
          );
    }
}
 
export default Form;