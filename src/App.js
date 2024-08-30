import Login from "./components/auth/login";
import Register from "./components/auth/register";

import Header from "./components/header";
import Home from "./components/home";
import PasswordReset from './components/auth/reset/PasswordReset'; // Ajusta la ruta según tu estructura de archivos

import { AuthProvider } from "./contexts/authContext";
import { useRoutes } from "react-router-dom";

function App() {
  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/reset-password",
      element: <PasswordReset />,
    }
  ];
  let routesElement = useRoutes(routesArray);
  return (
    <AuthProvider>
      <Header />
      <div className="w-full h-screen flex flex-col">{routesElement}</div>
    </AuthProvider>
  );
}

export default App;
