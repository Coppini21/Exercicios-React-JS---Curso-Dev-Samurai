import React, {useState} from 'react'
import PropTypes from 'prop-types';

import './styles.css'

function NewTodo( { onNewTodo } ) {
    const ESCAPE_KEY = 27;
    const ENTER_KEY = 13;
    const [value, setValue] = useState('');

    function erase(){
        setValue('');
    }

    function submit(){
        if(onNewTodo){
            onNewTodo(value)
            erase();
        }  
    }

    function onChange(e){
        setValue(e.target.value);
    }

    function onKeyDown(e){
        if(e.which === ENTER_KEY){
            submit();
        } else if (e.which === ESCAPE_KEY){
            erase();
        }
    }


  return (
    <div>
      <input className='new-todo' placeholder='O que precisa ser feito?' value={value} onChange={onChange} onKeyDown={onKeyDown}/>
    </div>
  )
}

NewTodo.propTypes = {
    onNewTodo: PropTypes.func.isRequired,
};

export default NewTodo;
