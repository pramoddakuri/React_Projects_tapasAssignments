import Box from '@mui/material/Box';
import './App.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import UserLoginComponent from './components/UserLoginComponent';
import { useAuth } from './hook/useAuth';
import { useLanguage } from './hook/useLanguage';

function App() {

  const { userData } = useAuth();
  const { language } = useLanguage();

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Auth App
          </Typography>
          <UserLoginComponent />
        </Toolbar>
      </AppBar>
      <h1>Provider Pattern</h1>
      <p>User: admin, password: admin</p>
      <Box sx={{ mr: 2 }}>
        <Box sx={{backgroundColor: 'red'}}>{userData?.name}</Box>
        {language === 'english' && <p>English</p>}
        {language === 'telugu' && <p>నమస్కారం</p>}
      </Box>

    </Box>
  )
}

export default App
