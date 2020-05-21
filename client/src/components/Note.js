import React, { useContext } from "react";

import { UserContext } from "../components/UserContext";

export const Note = () => {
  const {
    title,
    setTitle,
    comment,
    setComment,
    createNoteHandler,
  } = useContext(UserContext);

  return (
    <>
      <div
        className="card text-white bg-dark mb-3"
        style={{ maxWidth: "20rem" }}
      >
        <div className="card-header">{title}</div>
        <div className="card-body">
          <p className="card-text">{comment}</p>
        </div>
      </div>

      <form onSubmit={createNoteHandler}>
        <fieldset>
          <div className="form-group row"></div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="title"
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="text">Comment</label>
            <input
              type="text"
              className="form-control"
              name="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              id="text"
              placeholder="Comment"
            />
          </div>
          <button type="submit" className="btn btn-outline-primary">
            Submit
          </button>
        </fieldset>
      </form>
    </>
  );
};
