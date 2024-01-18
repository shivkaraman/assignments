import React from 'react';
import './TodosContainer.css';

const TodosContainer = ({ todos, setTodos }) => {
    const deleteTodo = (id) => {
        setTodos((prevState) =>
            prevState.filter((todo) => {
                return todo.id != id;
            })
        );
    };

    const markAsDone = (id) => {
        setTodos((prevState) =>
            prevState.map((todo) => {
                if (todo.id == id) return { ...todo, done: true };
                return todo;
            })
        );
    };
    return (
        <div className='todos-container'>
            <h1>Todos</h1>
            {todos.length == 0 && (
                <div>
                    <h2>No todos....</h2>
                </div>
            )}
            {todos &&
                todos.map((todo) => (
                    <div
                        className={`todo ${todo.done ? 'done' : ''}`}
                        key={todo.id}
                    >
                        <h3>
                            {todo.id}. {todo.title}
                        </h3>
                        <p>{todo.description}</p>
                        {!todo.done && (
                            <button onClick={() => markAsDone(todo.id)}>
                                Done
                            </button>
                        )}
                        {todo.done && <button disabled>Completed</button>}
                    </div>
                ))}
        </div>
    );
};

export default TodosContainer;
