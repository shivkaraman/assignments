import { useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { profileAtom } from './atoms/profileAtom';

import InputForm from './components/InputForm';
import ProfileCard from './components/ProfileCard';
import './App.css';

function App() {
    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const setProfileInfo = useSetRecoilState(profileAtom);

    useEffect(() => {
        async function fetchGithubInfo() {
            if (username.length == 0) return;
            setError(null);
            setLoading(true);

            try {
                const response = await fetch(
                    `https://api.github.com/users/${username}`
                );
                if (!response.ok) throw new Error('Network Errror');

                const userData = await response.json();
                if (userData.hasOwnProperty('message'))
                    throw new Error('Invalid Username');

                setLoading(false);
                setProfileInfo(userData);
            } catch (err) {
                setLoading(false);
                setError(err);
            }
        }

        fetchGithubInfo();
    }, [username]);

    return (
        <div className='container'>
            <h1>Github Profile Card</h1>
            <InputForm
                setUsername={setUsername}
                setError={setError}
            />
            {loading && <div>loading.....</div>}
            {error && <h3 style={{ color: 'red' }}>Invalid Username</h3>}
            {username.length != 0 && !loading && !error && <ProfileCard />}
        </div>
    );
}

export default App;
