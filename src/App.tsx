import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Login/Register";
import Home from "./pages/Home";
import "./App.css";
import ProtectedAuth from "./components/ProtectedAuth";

function App() {
  return (
    <Routes>
      <Route index element={<Login />}></Route>
      <Route path="register" element={<Register />}></Route>
      <Route
        path="home"
        element={
          <ProtectedAuth>
            <Home />
          </ProtectedAuth>
        }
      />
    </Routes>
  );
}

export default App;
