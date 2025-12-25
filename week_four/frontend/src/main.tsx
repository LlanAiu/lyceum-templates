// builtin

// external
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

// internal
import './index.css'
import App from './App.tsx'
import RandomPoemPage from './components/random-poem.tsx'


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route index element={<App />} />
                <Route path="random" element={<RandomPoemPage />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
)
