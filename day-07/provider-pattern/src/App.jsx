import Box from '@mui/material/Box';
import './App.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import UserLoginComponent from './components/UserLoginComponent';
import { useAuth } from './hook/useAuth';

function App() {

  const { userData } = useAuth();

  return (
    <Box>
      <h1>Provider Pattern</h1>
      <p>Authentication Context</p>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Auth App
          </Typography>
          <UserLoginComponent />
        </Toolbar>
      </AppBar>
      <Box sx={{ mr: 2 }}>
        <p>{userData?.name}</p>
      </Box>

    </Box>
  )
}

export default App
