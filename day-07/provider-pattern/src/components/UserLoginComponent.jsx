import { useState } from "react";
import { useAuth } from "../hook/useAuth";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useLanguage } from "../hook/useLanguage";

const UserLoginComponent = () => {
    const { loggedIn, login, logout } = useAuth();
    const { language, changeLanguage } = useLanguage();
    const [openLogin, setOpenLogin] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (event) => {
        changeLanguage(event.target.value);
    };

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
        <Box sx={{
            display: 'flex'
        }}>
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
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Select Language</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={language}
                        label="Select Language"
                        onChange={handleChange}
                    >
                        <MenuItem value={'english'}>English</MenuItem>
                        <MenuItem value={'telugu'}>Telugu</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Box>
    );
}

export default UserLoginComponent;