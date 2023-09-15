import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./Localhost/pages/Landing";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import About from "./Localhost/pages/About";
import {useEffect,useState} from "react"
const arrTitles = ["neXus","NeXus","nEXus","neXUs","neXuS","neXus"];
const App = () => {
  const [titleText,usetitleText] = useState(arrTitles[0]);
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/localhost",
    element: <Landing TitleText={titleText} />,
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
  useEffect(() =>{
  const changeText=async()=>{
    
    for(let i=0;i<arrTitles.length;i++) {
      console.log(arrTitles[i]);
      setTimeout(()=>{

        usetitleText(arrTitles[i]);
      },350*i);
    }
  
  }
  changeText();
  },[]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App

//nexus
//NeXus
//nEXus
//neXuS