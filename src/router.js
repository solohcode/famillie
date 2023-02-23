import {
  createBrowserRouter,
  RouterProvider,
  Link
} from "react-router-dom";


function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <h1>Hello World</h1>
          <Link to="faq">about</Link>
        </div>
      ),
    },
    {
      path: "faq",
      element: 
      <div>
        <div>
          <h1 className="text-center">Frequently Asked Questions</h1>
        </div>
      </div>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
