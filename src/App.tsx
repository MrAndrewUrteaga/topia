import React from "react";
import { UserList } from "./components/UserList/UserList";
import { CoordinatesContextProvider } from "./context/CoordinatesContext";
import { ListUserContextProvider } from "./context/ListUserContext";

export const App = () => {
  return (
    <ListUserContextProvider>
      <CoordinatesContextProvider>
          <UserList />
      </CoordinatesContextProvider>
    </ListUserContextProvider>
  );
};
