import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Signin from './pages/Signin';
import Otp from './pages/Otp';
import './App.css';

function App() {
    const [phoneNo, setPhoneNo] = useState('');
    return (
        <div className='app'>
            <BrowserRouter>
                <Routes>
                    <Route
                        path='/'
                        element={<Signin setPhoneNo={setPhoneNo} />}
                    />
                    <Route
                        path='/otp'
                        element={<Otp phoneNo={phoneNo} />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
