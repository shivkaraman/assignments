import { useState } from 'react';
import './App.css';

//Components
import TodosContainer from './components/TodosContainer/TodosContainer';
import TodosForm from './components/TodosForm/TodosForm';

function App() {
    const [todos, setTodos] = useState([]);

    return (
        <div className='container'>
            <TodosContainer
                todos={todos}
                setTodos={setTodos}
            ></TodosContainer>
            <TodosForm
                todos={todos}
                setTodos={setTodos}
            ></TodosForm>
        </div>
    );
}

export default App;
