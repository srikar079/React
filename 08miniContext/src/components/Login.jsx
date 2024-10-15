import { useContext, useState } from "react";
import UserContext from "../context/userContext";

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const { SetUser } = useContext(UserContext);

  console.log("SetUser function from context:", SetUser);

  function handleLogin(e) {
    console.log(e);
    e.preventDefault();
    SetUser({ name, password });
  }

  return (
    <div>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;