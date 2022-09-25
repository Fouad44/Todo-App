import { useState } from "react";
import EditTodo from "./EditTodo";

const Todos = (props) => {
   const handleDelete = () => {
      props.setTodos((prev) => prev.filter((p) => p.id != props.id));
   };

   const [isModalOpen, setIsModalOpen] = useState(false);

   const handleOpenModal = () => {
      setIsModalOpen(true);
   };

   const handleCloseModal = () => {
      setIsModalOpen(false);
   };

   const handleSaveChanges = (id) => {
      const newTodos = [...props.todos].map((todo) => todo.id === id);
      props.setTodos(newTodos);
   };

   return (
      <>
         <li className="list-group-item" key={props.id}>
            {props.title}
            <br></br> {props.desc}
            <button
               onClick={handleDelete}
               className="btn-delete btn btn-danger"
            >
               Delete
            </button>
            <button
               onClick={handleOpenModal}
               className="btn-edit btn btn-warning"
            >
               Edit
            </button>
         </li>
         {isModalOpen && (
            <EditTodo
               handleCloseModal={handleCloseModal}
               title={props.title}
               desc={props.desc}
               setTodos={props.setTodos}
               todos={props.todos}
               id={props.id}
               handleSaveChanges={handleSaveChanges}
            />
         )}
      </>
   );
};

export default Todos;
