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
      if (localStorage.getItem("todo")) {
         setTodos(JSON.parse(localStorage.getItem("todo")));
      }
   }, []);

   //set

   useEffect(() => {
      localStorage.setItem("todo", JSON.stringify(todos));
   }, [todos]);

   return (
      <div className="App">
         <Header />
         <TodoForm setTodos={setTodos} />
         <ul className="list-group">
            {todos.map((todo) => (
               <Todos
                  setTodos={setTodos}
                  todos={todos}
                  title={todo.title}
                  desc={todo.desc}
                  id={todo.id}
                  key={todo.id}
               />
            ))}
         </ul>

         {/* <LikesCounter /> */}
      </div>
   );
}

export default App;
