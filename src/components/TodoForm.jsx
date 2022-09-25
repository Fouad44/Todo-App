import { useEffect } from "react";
import { useState } from "react";

const TodoForm = (props) => {
   const handleSubmit = (e) => {
      e.preventDefault();
      props.setTodos((prev) => prev.concat({ title, desc, id: Date.now() }));
      setTitle("");
      setDesc("");
   };

   const [theTime, setTheTime] = useState(new Date().toLocaleString());
   useEffect(() => {
      const interval = setInterval(
         () => setTheTime(new Date().toLocaleString()),
         1000
      );
      return () => clearInterval(interval);
   }, []);

   const [title, setTitle] = useState("");
   const [desc, setDesc] = useState("");

   return (
      <>
         <p>Time now is {theTime}</p>
         <form className="main-form" onSubmit={handleSubmit}>
            <div className="mb-3">
               <label htmlFor="title" className="form-label">
                  Title
               </label>
               <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Title"
               />
            </div>
            <div className="mb-3">
               <label htmlFor="description" className="form-label">
                  Description
               </label>
               <input
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  type="text"
                  className="form-control"
                  id="description"
                  placeholder="Description"
               />
            </div>
            <div className="btn-wrapper">
               <button type="submit" className="btn1 btn btn-primary">
                  Add Todo
               </button>
            </div>
         </form>
      </>
   );
};

export default TodoForm;
