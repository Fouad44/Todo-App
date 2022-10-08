import { useState } from "react";
import EditTodo from "./EditTodo";

const Todos = (props) => {
   const { handleEditTodo, currentTodo, setTodos } = props;

   const handleDelete = () => {
      setTodos((prev) => prev.filter((p) => p.id != currentTodo.id));
   };

   const [isModalOpen, setIsModalOpen] = useState(false);

   const handleOpenModal = () => {
      setIsModalOpen(true);
   };

   const handleCloseModal = () => {
      setIsModalOpen(false);
   };

   // const handleSaveChanges = (id) => {
   //    const newTodos = [...props.todos].map((todo) => todo.id === id);
   //    props.setTodos(newTodos);
   // };

   return (
      <>
         <li className="list-group-item" key={currentTodo.id}>
            {currentTodo.title}
            <br></br> {currentTodo.desc}
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
               setTodos={setTodos}
               handleSaveChanges={handleEditTodo}
               currentTodo={currentTodo}
            />
         )}
      </>
   );
};

export default Todos;
