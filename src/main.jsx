import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router.jsx'
import ContextApi from './contextapi/ContextApi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextApi>
    <RouterProvider router={router}></RouterProvider>
    </ContextApi>
  </StrictMode>,
)
