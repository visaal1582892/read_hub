import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import BrowseBooks from './components/BrowseBooks.jsx'
import { Provider } from 'react-redux'
import store from './utils/store.js'

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
        path: 'browseBooks',
        element: <BrowseBooks />,
        children: [
          {
            index: true,
            element: <div>All Books</div>,
          },
          {
            path: ':category',
            element: <div>Category</div>,
          }
        ]
      },
      {
        path: 'addBook',
        element: <div>Add Book</div>,
      },
      {
        path: 'books/:id',
        element: <div>Book Details</div>,
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
