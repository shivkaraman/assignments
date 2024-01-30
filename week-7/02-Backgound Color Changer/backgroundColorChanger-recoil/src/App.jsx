import { colorsAtom } from './atoms/colorsAtom';
import { useRecoilState } from 'recoil';
import './App.css';

const themesArray = [
    'Red',
    'Yellow',
    'Black',
    'Purple',
    'Green',
    'Blue',
    'Default',
];

function App() {
    const [backgroundColor, setBackgroundColor] = useRecoilState(colorsAtom);

    const handleClick = (e) => {
        const clickedColor = e.target.innerHTML.toLocaleLowerCase();
        setBackgroundColor(
            clickedColor === 'default' ? 'orange' : clickedColor
        );
    };

    return (
        <div
            className='container'
            style={{ backgroundColor }}
        >
            <div className='theme-setter'>
                {themesArray.map((color, index) => (
                    <li
                        className='btn'
                        style={{
                            backgroundColor: (color === 'Default'
                                ? 'orange'
                                : color
                            ).toLocaleLowerCase(),
                        }}
                        key={index}
                        onClick={handleClick}
                    >
                        {color}
                    </li>
                ))}
            </div>
        </div>
    );
}

export default App;
