import React, { useState, useContext } from "react";
import UserContext from "../content/UserContext";

function Login() {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser(userName, pass);
  };

  return (
    <div className="bg-gray-900">
      <h2>Login</h2>
      <input
        className="rounded-lg p-2 m-2"
        type="text"
        placeholder="user"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        className="rounded-lg p-2 m-1"
        type="text"
        placeholder="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="h-15 w-15 rounded-lg p-2 bg-green-400"
      >
        Submit
      </button>
    </div>
  );
}

export default Login;
