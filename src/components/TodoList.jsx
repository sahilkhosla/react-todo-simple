import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todoList, onTodoClick}) => {
	const todoListHtml = todoList.map((todo) => {
		return (
			<TodoItem todo={todo.text} key={todo.id} id={todo.id} onTodoClick={onTodoClick} />
		)
	});

	return (
		<ul>
			{todoListHtml}
		</ul>
	)
}

export default TodoList;