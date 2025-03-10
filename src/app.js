// Define login and register routes.

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route Path="/login" element={<Login />} />
        <Route Path="/register" element={<Register />} />
        <Route Path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
