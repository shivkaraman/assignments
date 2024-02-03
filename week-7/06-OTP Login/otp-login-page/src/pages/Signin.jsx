import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signin = ({ setPhoneNo }) => {
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setPhoneNo(input);
        navigate('/otp');
    };

    return (
        <div className='form-container'>
            <h1>Login via OTP</h1>
            <form onSubmit={handleSubmit}>
                <input
                    className='ph-input'
                    type='text'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='Enter your mobile number'
                    maxLength={10}
                    minLength={10}
                    required
                ></input>
                <button>Send OTP</button>
            </form>
        </div>
    );
};

export default Signin;
