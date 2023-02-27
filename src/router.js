import {
  Route,
  Routes,
} from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header/header";
import Error404Page from "./pages/auth/404";
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
    {
      path: "*",
      element: <Error404Page />,
    },
  ]
  return (
    <div className="text-primary_dark">
      <Header />
      <Routes>
        {routes.map(({path, element})=>(
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
