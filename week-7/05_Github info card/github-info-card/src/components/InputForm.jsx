import React from 'react';
import { useState } from 'react';
import './InputForm.css';
const InputForm = ({ setUsername, setError }) => {
    const [input, setInput] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        setUsername(input);
    };

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Enter Username'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                ></input>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default InputForm;
