import React, { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState, FC } from "react";

interface Context {
  xPosition: string;
  setXPosition: Dispatch<SetStateAction<string>>;
  yPosition: string;
  setYPosition: Dispatch<SetStateAction<string>>;
}

const CoordinatesContext = createContext<Context | undefined >(undefined);

interface Props {
  children: ReactNode;
}

export const CoordinatesContextProvider: FC<Props> = ({ children }: Props) => {
  const [xPosition, setXPosition] = useState('800');
  const [yPosition, setYPosition] = useState('400');
  return (
    <CoordinatesContext.Provider
      value={{
        xPosition,
        setXPosition,
        yPosition,
        setYPosition,
      }}
    >
      {children}
    </CoordinatesContext.Provider>
  );
};

export const useCoordinates = (): Context => {
  const context = useContext(CoordinatesContext);
  if (!context) {
    throw new Error('useCoordinates must be used within a Provider');
  }
  return context
}
