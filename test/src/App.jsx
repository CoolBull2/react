import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Cat from "./components/Cat";

const router = createBrowserRouter([
  {
    path: "/:data",
    element: <Cat />,
  },
]);
function App() {
  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/:data" element={<Cat />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
