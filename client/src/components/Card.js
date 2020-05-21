import React from "react";

export const Card = (props) => {
  const { title, comment, updateHandler, deleteHandler } = props;
  return (
    <>
      <div className="card mt-3">
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{comment}</p>
          <button
            type="button"
            onClick={updateHandler}
            className="btn btn-outline-warning"
          >
            Update
          </button>
          <button
            type="button"
            onClick={deleteHandler}
            className="btn btn-outline-danger ml-3"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};
