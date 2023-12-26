import React, { createContext, useContext, useState, Dispatch, SetStateAction, ReactNode } from "react";
import { USER_LIST } from "../utils/constants";
import { User, ListUser } from "../models/userList";

interface Context {
  defaultList: Record<string, User>;
  inViewList: ListUser[];
  setInViewList: Dispatch<SetStateAction<ListUser[]>>;
}

const ListUserContext = createContext<Context | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const ListUserContextProvider = ({ children }: Props) => {
  const [inViewList, setInViewList] = useState<ListUser[]>([]);
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

export const useListUser = () => {
  const context = useContext(ListUserContext);
  if (!context) {
    throw new Error('useListUser must be used within a Provider');
  }
  return context
};

