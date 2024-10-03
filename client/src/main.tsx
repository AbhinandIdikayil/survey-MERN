import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <main className='bg-[#34a265] h-screen  max-md:h-full w-full'>
        <App />
      </main>
    </BrowserRouter>
  </StrictMode>,
)
