import React from 'react';
import { useState } from 'react';
import './TodosForm.css';

let id = 1;
const TodosForm = ({ todos, setTodos }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(null);

    const addTodo = () => {
        setTodos([
            ...todos,
            {
                id: id++,
                title,
                description,
                done: false,
            },
        ]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        if (title.length == 0) {
            setError('Enter todo title');
            return;
        }

        addTodo();
        setTitle('');
        setDescription('');
    };
    return (
        <div
            className='todos-form'
            onSubmit={handleSubmit}
        >
            <h2>Add Todo</h2>
            <form>
                <label>
                    <span>Todo: </span>
                    <input
                        type='text'
                        placeholder='Title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    ></input>
                </label>
                <br></br>
                <label>
                    <span>Description: </span>
                    <input
                        type='text'
                        placeholder='Description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></input>
                </label>
                {error && <p className='error'>{error}</p>}
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default TodosForm;
