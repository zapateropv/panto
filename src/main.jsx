import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Dashboard from './pages/Dashboard.jsx'
import NotFound from './pages/NotFound.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/slice.js'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

const router = createBrowserRouter([
  {path: '/', element: <App/>},
  {path: '/dashboard', element: <Dashboard /> },
  {path: '/about', element: <About />},
  {path: '/contact', element: <Contact />},
  {path: '*', element: <NotFound/>},

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
         <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
