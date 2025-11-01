import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import ContextShare from './contextAPI/ContextShare.jsx'
import AuthContext from './contextAPI/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId='1085816733503-jfrvci8mmmkjjupifh488jmsg279eepf.apps.googleusercontent.com'>  <ContextShare>
     <AuthContext>   <App /></AuthContext>
      </ContextShare>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>
)
