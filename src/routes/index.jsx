import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";

const RoutesMain = () => {
  const [user, setUser] = useState({});

  return (
    <Routes>
      <Route path="*" element={<Login setUser={setUser} />} />
      <Route path="/login" element={<Login setUser={setUser} />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard user={user} />} />
    </Routes>
  );
};

export default RoutesMain;
