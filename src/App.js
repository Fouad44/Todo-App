import { useEffect } from "react";
import { useState } from "react";
import Header from "./components/Header";
// import LikesCounter from "./components/Likes";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

function App() {
   const [todos, setTodos] = useState([]);

   //get

   useEffect(() => {
      const getTodos = JSON.parse(localStorage.getItem("todo"));
      if (getTodos?.length) {
         setTodos(getTodos);
      }
   }, []);

   //set

   useEffect(() => {
      localStorage.setItem("todo", JSON.stringify(todos));
   }, [todos]);

   const handleEditTodo = (newTodo) => {
      const tods = [...todos];
      const todoIndex = tods.findIndex((t) => Number(t.id) === Number(newTodo.id));
      if (todoIndex >= 0) {
         tods.splice(todoIndex, 1, newTodo);
         setTodos([...tods]);
      }
   }

   return (
      <div className="App">
         <Header />
         <TodoForm setTodos={setTodos} />
         <ul className="list-group">
            {todos.map((todo) => (
               <Todos
                  setTodos={setTodos}
                  key={todo.id}
                  handleEditTodo={handleEditTodo}
                  currentTodo={todo}
               />
            ))}
         </ul>

         {/* <LikesCounter /> */}
      </div>
   );
}

export default App;
