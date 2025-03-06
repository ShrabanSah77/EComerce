//Handle user Register API calls.

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http//localhost:5000/api//auth/register", {
        email,
        password,
      });
      alert("User registered! Now log in.");
      navigate("/login");
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          requird
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          requird
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
