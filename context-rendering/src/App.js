import "./App.css";
import Notifications from "./components/Notifications";
import Users from "./components/User";
import AuthContextProvider from "./contexts/AuthContext";
import CombinedContextProvider from "./contexts/CombinedContext";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <CombinedContextProvider>
            <Notifications />
            <Users />
          </CombinedContextProvider>
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
