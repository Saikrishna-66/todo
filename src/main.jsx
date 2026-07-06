import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Signup from './pages/signup/Signup.jsx'
import Signin from './pages/signup/signin/Signin.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Signup/>
  </StrictMode>,
)
