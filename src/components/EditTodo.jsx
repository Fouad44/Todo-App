const EditTodo = (props) => {
   const handleEditChange = (e) => {
      props.setTodos({ title: e.taget.value });
   };

   return (
      <>
         <div className="backdrop" onClick={props.handleCloseModal}></div>
         <div className="edit-form-content">
            <form className="edit-form">
               <div className="mb-3">
                  <label htmlFor="Title" className="form-label">
                     Title
                  </label>
                  <input
                     defaultValue={props.title}
                     onChange={() => handleEditChange}
                     type="text"
                     className="form-control"
                     id="Title"
                     placeholder="Title"
                  />
               </div>
               <div className="mb-3">
                  <label htmlFor="Description" className="form-label">
                     Description
                  </label>
                  <input
                     defaultValue={props.desc}
                     type="text"
                     className="form-control"
                     id="Description"
                     placeholder="Description"
                  />
               </div>
            </form>
            <button
               onClick={props.handleCloseModal}
               className="btn-close-modal btn btn-secondary"
            >
               Close
            </button>
            <button
               onClick={() => props.handleSaveChanges(props.id)}
               className="btn-save-modal btn btn-primary"
            >
               Save
            </button>
         </div>
      </>
   );
};

export default EditTodo;
