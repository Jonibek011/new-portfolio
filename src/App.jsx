import { createBrowserRouter, RouterProvider } from "react-router-dom"

//layouts
import RootLayout from "./layouts/RootLayout"

//pages
import { Home, About, Portfolio, Contact } from "./pages/Index"




function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: '/portfolio',
          element:<Portfolio/>
        },
        {
          path: "/contact",
          element: <Contact/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={routes}/>
  )
}

export default App