import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./Localhost/pages/Landing";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import About from "./Localhost/pages/About";

const App = () => {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/localhost",
    element: <Landing />,
  },
  {
    path: "/localhost/about",
    element: <About />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App
