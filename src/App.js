import React, { useState } from 'react';

import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';


function App() {
    const [todos, setTodos] = useState([]);

    function onNewTodo(value){
        setTodos([...todos, {id: new Date().getTime(), title: value, checked: false}]);
        
    }
    
    function onToggle(todo){
        setTodos(todos.map((obj) => obj.id === todo.id ? {...obj, checked: !todo.checked } : obj));
    
        console.log('toggle', todos)
    }

    function onRemove(todo){
        setTodos(todos.filter((obj) => obj.id !== todo.id))
        
    }

    return (
        <section id='app' className='container'>
            <header>
                <h1 className='title'>todo</h1>
            </header>

            <section className='main'>
                <NewTodo onNewTodo={onNewTodo} />
                <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
            </section> 
        </section>
    );
}

export default App;
