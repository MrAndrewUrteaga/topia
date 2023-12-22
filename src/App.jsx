import "./App.css";
import { UserList } from "./components/UserList/UserList";
import { CoordinatesContextProvider } from "./context/CoordinatesContext";
import { ListUserContextProvider } from "./context/ListUserContext";

const App = () => {
  return (
    <ListUserContextProvider>
      <CoordinatesContextProvider>
        <div className="App">
          <UserList />
        </div>
      </CoordinatesContextProvider>
    </ListUserContextProvider>
  );
};

export default App;
