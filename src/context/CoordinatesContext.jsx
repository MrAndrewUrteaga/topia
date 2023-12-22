import { createContext, useContext, useState } from "react";

const CoordinatesContext = createContext();

export const CoordinatesContextProvider = ({ children }) => {
  const [xPosition, setXPosition] = useState(800);
  const [yPosition, setYPosition] = useState(400);
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

export const useCoordinates = () => useContext(CoordinatesContext);
