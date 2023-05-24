import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import "./App.css";
import { Home } from "./components";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])
function App() {
  return (
    <>

      <Home />
    </>
  );
}

export default App;
