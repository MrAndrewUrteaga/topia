import { createContext, useContext, useState } from "react";
import { USER_LIST } from "../utils/constants";

const ListUserContext = createContext();

export const ListUserContextProvider = ({ children }) => {
  const [inViewList, setInViewList] = useState([]);
  const [defaultList] = useState(USER_LIST);
  return (
    <ListUserContext.Provider
      value={{
        defaultList,
        inViewList,
        setInViewList,
      }}
    >
      {children}
    </ListUserContext.Provider>
  );
};

export const useListUser = () => useContext(ListUserContext);
