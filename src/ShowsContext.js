import React from "react";
import { useState } from "react";
import { createContext } from "react";

const ShowsContext = createContext({
  clickedShow: null,
});

export const ShowsContextProvider = (props) => {
  const [showSave, setShowSave] = useState(
    JSON.parse(window.localStorage.getItem("savedShow"))
  );

  const [actorId, setActorId] = useState(
    JSON.parse(window.localStorage.getItem("savedActor"))
  );

  const showSaveHander = (item) => {
    setShowSave(item);
    window.localStorage.setItem("savedShow", JSON.stringify(item));
  };

  const actorHandler = (id) => {
    setActorId(id);
  };

  const context = {
    clickedShow: showSave,
    clickedActor: actorId,
    handleShowSave: showSaveHander,
    handleActor: actorHandler,
  };

  return (
    <ShowsContext.Provider value={context}>
      {props.children}
    </ShowsContext.Provider>
  );
};

export default ShowsContext;
