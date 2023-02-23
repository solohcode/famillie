import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FaqPage from "./pages/faq";
import HomePage from "./pages/home";
import PolicyPage from "./pages/policy";


function App() {
  const routes = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "/faq",
      element: <FaqPage />,
    },
    {
      path: "/policy",
      element: <PolicyPage />,
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
