import BusinessCard from './components/BusinessCard';

function App() {
    return (
        <div>
            <BusinessCard
                name={'Shivkaraman S'}
                description={'Full Stack Developer'}
                interests={['Gym', 'Sketching', 'Basketball']}
                linekdin='https://www.linkedin.com/in/shivkaraman-s/'
                twitter='https://twitter.com/shivkaraman21'
                otherSocialHandles={{
                    github: 'https://github.com/shivkaraman',
                }}
            />
        </div>
    );
}

export default App;
