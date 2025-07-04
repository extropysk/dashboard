import AboutPage from "@/app/about/page"
import RootLayout from "@/app/layout"
import { LoginPage } from "@/app/login/page"

import RootPage from "@/app/page"
import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <RootPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
  },
])
