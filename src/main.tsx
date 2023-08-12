import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.tsx'
import { store } from './store/store.ts'
import { Provider } from 'react-redux'
import 'react-loading-skeleton/dist/skeleton.css'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
</Provider>,
)
