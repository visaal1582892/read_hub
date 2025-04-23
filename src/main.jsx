import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider,Navigate } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import BrowseBooks 
from './components/BrowseBooks.jsx'
import { Provider } from 'react-redux'
import store from './utils/store.js'
import BookDetails from './components/BookDetails.jsx'

// creating a router configuration
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'browseBooks/:category',
        element: <BrowseBooks />,
      },
      {
        path: 'addBook',
        element: <div>Add Book</div>,
      },
      {
        path: 'books/:id',
        element: <BookDetails />,
      }
    ],
    errorElement: <div>404 Not Found</div>,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>,
)
