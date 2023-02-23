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
          <Link to="about">about</Link>
        </div>
      ),
    },
    {
      path: "about",
      element: <div>About</div>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
