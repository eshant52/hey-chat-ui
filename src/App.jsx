import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/AppLayout';
import PageNotFound from './pages/error/PageNotFound';


function App() {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <div className="antialiased text-9xl">home page</div>,
      errorElement: <PageNotFound />,
    },
    {
      path: 'chat',
      element: <AppLayout />
    }
  ]);

  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
