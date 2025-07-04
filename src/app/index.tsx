import AboutPage from "@/app/about/page";
import RootLayout from "@/app/layout";

import RootPage from "@/app/page";
import { createBrowserRouter } from "react-router-dom";

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
]);
