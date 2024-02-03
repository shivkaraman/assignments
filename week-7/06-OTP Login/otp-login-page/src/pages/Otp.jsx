import React, { useRef, useState } from 'react';
import { useEffect } from 'react';

const Otp = ({ phoneNo }) => {
    const [otp, setOtp] = useState('');
    const inputRefs = useRef([
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
    ]);

    const focusNextInput = (index) => {
        inputRefs.current[index + 1].current.focus();
    };

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (value.length === 1 && index < inputRefs.current.length - 1)
            focusNextInput(index);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let otp = '';
        inputRefs.current.forEach((ref) => {
            otp += ref.current.value;
        });
        console.log(otp);
        setOtp(otp);
    };

    useEffect(() => {
        inputRefs.current[0].current.focus();
    }, []);

    return (
        <div className='form-container'>
            <h1>Login via OTP</h1>
            <p>Enter OTP for {phoneNo}</p>
            <form onSubmit={handleSubmit}>
                <div className='otp-input-container'>
                    {[0, 1, 2, 3].map((index) => (
                        <input
                            className='otp-input'
                            key={index}
                            type='text'
                            maxLength={1}
                            ref={inputRefs.current[index]}
                            onChange={(e) => handleChange(e, index)}
                            required
                        />
                    ))}
                </div>
                <button>Login</button>
            </form>
        </div>
    );
};

export default Otp;
