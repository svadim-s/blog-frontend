import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/global.scss'
import { AppQueryClientProvider } from '@/app/providers/ui'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppQueryClientProvider>
      <App />
    </AppQueryClientProvider>
  </StrictMode>
)
