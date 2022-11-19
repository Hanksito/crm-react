import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";
import NuevoCliente, {
  action as actionNuevoCliente,
} from "./pages/NuevoCliente";
import {
  loader as editarLoader,
  action as editarAction,
} from "./components/EditarCliente";
import Index, { loader as clientesLoader } from "./pages/Index";
import ErrorPage from "./components/ErrorPage";
import EditarCliente from "./components/EditarCliente";
import { action as eliminarCliente } from "./components/Cliente";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientesLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "/clientes/nuevo",
        element: <NuevoCliente />,
        action: actionNuevoCliente,
        errorElement: <ErrorPage />,
      },
      {
        path: "/clientes/:clienteId/editar",
        element: <EditarCliente />,
        loader: editarLoader,
        action: editarAction,
        errorElement: <ErrorPage />,
      },
      {
        path: "/clientes/:clienteId/eliminar",
        action: eliminarCliente,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
