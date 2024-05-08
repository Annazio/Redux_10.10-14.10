import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./components/TodoItem";
import ToDoCalculation from "./components/ToDoCalculation";
import AddTodo from "./components/AddTodo";
import UsersContainer from "./components/UsersContainer";
import { useEffect } from "react";
import { fetchTodos } from "./store/slice/todoSlice";

function App() {

  const todos = useSelector(({todo}) => todo.list)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch])

  return (
    <div>
      <AddTodo/>
      <div>

      </div>
    <div>
      {
        todos.map(todo => <TodoItem key={todo.id} {...todo}/>)
      }
    </div>
    <ToDoCalculation/>
    <UsersContainer/>
    </div>
  );
}

export default App;
