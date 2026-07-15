import { createBrowserRouter } from "react-router-dom";
import { CustomMensaje } from "./components/custom-mensaje";
import { Pantalla2 } from "./components/pantalla2";
import { Inicio } from "./components/inicio";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <CustomMensaje />,
    children: [
      {
        index: true,
        element: <Inicio />,
      },
      {
        path: "/calculadora",
        element: <Pantalla2 />,
      },
    ],
  },
]);
