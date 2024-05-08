import React from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/slice/todoSlice';

export default function AddTodo() {

    const dispatch = useDispatch()

const handler = event => {
   event.preventDefault();
   const {title} = event.target;
   console.log(title.value);
   dispatch(addTodo(title.value));
   event.target.reset();
}

  return (
   <form onSubmit={handler}>
        <input type="text" name='title' />
        <button>Hinzufügen</button>
    </form>
  )
}
