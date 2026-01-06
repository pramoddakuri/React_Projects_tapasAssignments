import { useState } from "react";
import { useAuth } from "../hook/useAuth";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";

const UserLoginComponent = () => {
    const { loggedIn, login, logout } = useAuth();
    const [openLogin, setOpenLogin] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        login(userEmail, password);
        setOpenLogin(false);
    }

    const handleLogout = () => {
        logout();
        setUserEmail('');
        setPassword('');
    }

    return (
        <Box>
            {loggedIn ? (
                <button onClick={handleLogout}>Logout</button>
            ) : (
                <button onClick={() => setOpenLogin(true)}>Login</button>
            )}
            {openLogin && (
                <Dialog open={openLogin} onClose={() => setOpenLogin(false)}>
                    <h3>Login Form</h3>
                    <input type="text" placeholder="Email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={handleLogin}>Submit</button>
                </Dialog>
            )}
        </Box>
    );
}

export default UserLoginComponent;