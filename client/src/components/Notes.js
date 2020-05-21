import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import { Card } from "./Card";

export const Notes = () => {
  const { notes, updateHandler, deleteHander } = useContext(UserContext);
  return (
    <>
      {notes.map((item) => (
        <Card
          key={item._id}
          title={item.title}
          comment={item.comment}
          updateHandler={updateHandler}
          deleteHander={deleteHander}
        />
      ))}
    </>
  );
};
