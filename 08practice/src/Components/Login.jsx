import React, { useState, useContext } from 'react';
import UserContext from '../Context/UserContext';

function Login() {
    const [nme, setName] = useState('');  // Corrected syntax
    const [pass, setPass] = useState('');  // Corrected syntax

    const { setUser } = useContext(UserContext);

    function submit(e) {
        e.preventDefault();
        setUser({ nme, pass });  // Passing the user details to the context
        console.log(e);
    }

    return (
        <div>
            <h2>Login</h2>
            <input 
                type="text" 
                value={nme} 
                onChange={(e) => setName(e.target.value)}  // Using setName to update the state
                placeholder="Username"
            />
            <input 
                type="password"  // Changed input type to 'password' for security
                value={pass}
                onChange={(e) => setPass(e.target.value)}  // Using setPass to update the state
                placeholder="Password"
            />
            <button onClick={submit}>Login</button>
        </div>
    );
}

export default Login;
