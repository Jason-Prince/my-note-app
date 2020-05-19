import React from "react";

export const Note = () => (
  <>
    <div className="card text-white bg-dark mb-3" style={{ maxWidth: "20rem" }}>
      <div className="card-header">Header</div>
      <div className="card-body">
        <h4 className="card-title">Dark card title</h4>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>

    <form _lpchecked="1">
      <fieldset>
        <div class="form-group row"></div>
        <div class="form-group">
          <label for="title">Title</label>
          <input
            type="text"
            class="form-control"
            id="title"
            placeholder="Title"
          />
        </div>
        <div class="form-group">
          <label for="text">Comment</label>
          <input
            type="text"
            class="form-control"
            id="text"
            placeholder="Comment"
          />
        </div>
        <button type="submit" class="btn btn-outline-primary">
          Submit
        </button>
      </fieldset>
    </form>
  </>
);
