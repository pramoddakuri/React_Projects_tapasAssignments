import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthincationProvider from './provider/AuthenticationProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthincationProvider>
      <App />
    </AuthincationProvider>
  </StrictMode>,
)
