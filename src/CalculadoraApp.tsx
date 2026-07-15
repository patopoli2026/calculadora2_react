import { RouterProvider } from "react-router-dom";
import { appRouter } from "./app.router";

export const CalculadoraApp = () => {
  return <RouterProvider router={appRouter} />;
};
