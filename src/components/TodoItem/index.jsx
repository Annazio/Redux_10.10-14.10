import React from 'react'
import s from "./style.module.css"
import { useDispatch } from 'react-redux';
import { changeDone, remove } from '../../store/slice/todoSlice';

export default function TodoItem({title, id, done}) {
    const dispatch = useDispatch();
  return (
    <div className={s.item}>
        <input checked ={done} onChange={() => {
            dispatch(changeDone(id))}} type="checkbox" />
        <p>{title}</p>
        <button onClick={() => dispatch(remove(id))}>Löschen</button>
    </div>
    )
  }
  