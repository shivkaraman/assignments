import './App.css';
import { useState } from 'react';

const words = [
    'apple',
    'banana',
    'cherry',
    'orange',
    'grape',
    'lemon',
    'lime',
    'strawberry',
    'blueberry',
    'kiwi',
];

function App() {
    const [paragraph, setParagraph] = useState('');
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const len = input;
        let para = '';
        for (let i = 0; i < len; i++) {
            const randIdx = Math.floor(Math.random() * words.length);
            para += words[randIdx] + ' ';
        }
        setParagraph(para);
    };

    return (
        <div className='container'>
            <h1>Paragraph generator</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Enter Number Of Words'
                    onChange={(e) => setInput(e.target.value)}
                ></input>
                <button>Generate</button>
            </form>
            {paragraph.length > 0 && (
                <div className='paragraph'>
                    <p>{paragraph}</p>
                </div>
            )}
        </div>
    );
}

export default App;
