import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/Register";
import Dashboard from "./pages/Dasboard";

const router=createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path: "/dashboard",
    element:<Dashboard/>
  }
]
  
)
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router}/>
);
