import React, { Component } from 'react';
import TodoList from './TodoList';

class App extends Component {
	//constructor for "App" component
	constructor(props) {
		super(props);

		//initialize state with an empty todoList
		this.state = {
			todoList: [],
			todoInput: 'What needs to be done today?'
		};
	}

	//required render method
	render() {
		return (
			<div>
				<p>React Todo (simple)</p>
				<input 
					onKeyPress={this.handleAddEvent} 
					onChange={this.handleInputChange}
					value={this.state.todoInput} />				
				<TodoList 
					todoList={this.state.todoList} 					
					onTodoClick={id => this.handleClickEvent(id)}/>				
			</div>
		);
	}

	//event handlers
	handleAddEvent = (event) => {
		if(event.key == 'Enter') {
			console.log(`enter key pressed: ${event.target.value}`);
			const todoList = this.state.todoList;
			todoList.push({text: event.target.value, id: Date.now()});
			this.setState({todoList, todoInput: ''});
		} 
	}

	handleInputChange = (event) => {
		const todoInput = event.target.value;
		this.setState({todoInput});		
	}

	handleClickEvent = (id) => {
		const todoList = this.state.todoList.filter(function(todo) {
			return todo.id != id;
		});	
		this.setState({todoList})
	}
}

export default App;