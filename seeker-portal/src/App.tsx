
import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { routes as appRoutes } from "./routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {appRoutes.map((route) => (
            <Route
              key={route.key}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </Router>    </div>
  );
}

export default App;
