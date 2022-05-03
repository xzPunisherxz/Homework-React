import React from "react";
import { observer } from "mobx-react-lite";
import { events } from "../../store";

const DeleteArchive = observer (() => { 

    const handleDelete = () => {
        
        events.deleteArchive();
        events.fetch();
      }

  return (
    <button className="delete-archive" type="button" onClick={handleDelete} >
      Очистить Архив
    </button>
  );
})

export default DeleteArchive;