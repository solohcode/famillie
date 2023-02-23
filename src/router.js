import { lazy } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {
  const routes = [
    {
      path: "/",
      element: lazy(() => import("./pages/home")),
    },
    {
      path: "/home",
      element: lazy(() => import("./pages/home")),
    },
    {
      path: "/faq",
      element: lazy(() => import("./pages/faq")),
    },
    {
      path: "/policy",
      element: lazy(() => import("./pages/policy")),
    },
  ]


  const route = createBrowserRouter(routes);
  return (
    <div className="App">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
