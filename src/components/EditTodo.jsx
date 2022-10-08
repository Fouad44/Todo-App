import React, { useState, useEffect } from "react";

const EditTodo = (props) => {
  const [todo, setTodo] = useState();

  const { currentTodo, handleCloseModal, handleSaveChanges } = props;

  useEffect(() => {
    if (todo?.id) {
      if (todo.id !== currentTodo.id) {
        setTodo(currentTodo);
      }
    } else {
      setTodo(currentTodo);
    }
  }, [currentTodo, todo]);

  const handleEdit = (e) => {
   let updatedTodo = {...todo, [e.target.id]: e.target.value};
   setTodo(updatedTodo);
  };

  return (
    <>
      <div className="backdrop" onClick={handleCloseModal}></div>
      <div className="edit-form-content">
        <form className="edit-form">
          <div className="mb-3">
            <label htmlFor="Title" className="form-label">
              Title
            </label>
            <input
              value={todo?.title ?? ''}
              onChange={handleEdit}
              type="text"
              className="form-control"
              id="title"
              placeholder="Title"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Description" className="form-label">
              Description
            </label>
            <input
              value={todo?.desc??''}
              onChange={handleEdit}
              type="text"
              className="form-control"
              id="desc"
              placeholder="Description"
            />
          </div>
        </form>
        <button
          onClick={handleCloseModal}
          className="btn-close-modal btn btn-secondary"
        >
          Close
        </button>
        <button
          onClick={() =>{
            handleSaveChanges(todo)
            handleCloseModal();
            }}
          className="btn-save-modal btn btn-primary"
        >
          Save
        </button>
      </div>
    </>
  );
};

export default EditTodo;
