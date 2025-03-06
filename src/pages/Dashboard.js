// Only accessible if logged in.

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/Login");
    } else {
      setUser("User Logged In");
    }
  }, []);

  return (
    <div>{user ? <h2> Welcome to the Dashboard</h2> : <p>Loading...</p>}</div>
  );
}

export default Dashboard;
