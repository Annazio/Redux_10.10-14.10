import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allDone, allNotDone, deleteDone, reset } from '../../store/slice/todoSlice';

export default function ToDoCalculation() {

    const todos = useSelector(({todo}) => todo.list);
    const dispatch = useDispatch()

  return (
    <div>
        <p>Erledigte Aufgaben: {todos.filter(({done}) => done).length}</p>
        <p>Nicht erledigte Aufgaben: {todos.filter(({done}) => !done).length}</p>
        <button onClick={() => dispatch(reset())}>Alle Aufgaben löschen</button>
        <button onClick={() => dispatch(allDone())}>Alles erledigt</button>
        <button onClick={() => dispatch(allNotDone())}>Nichts erledigt</button>
        <button onClick={() => dispatch(deleteDone())}>Erledigte Aufgaben löschen</button>
    </div>
  )
}
