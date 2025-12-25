// builtin

// external
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// internal
import './index.css'
import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
