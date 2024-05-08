import React from 'react'
import AddTodo from '../AddTodo'
import TodoItem from '../TodoItem'
import ToDoCalculation from '../ToDoCalculation'

export default function TodoContainer() {
  return (
    <div>
        <AddTodo/>
        <TodoItem/>
        <ToDoCalculation/>
        
    </div>
  )
}
