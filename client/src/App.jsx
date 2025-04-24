import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { Layout, Home, About, Projects, Contacts, Signup, Login } from '../src/index.js';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "projects", element: <Projects /> },
        { path: "contact", element: <Contacts /> },
        { path: "signup", element: <Signup/> },
        { path: "login", element: <Login /> },  
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
