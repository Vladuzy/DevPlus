import Routes from "./routes/index.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MenuFooter from "./components/MenuFooter";
function App() {
  return (
    <>
      <ToastContainer />
      <Routes />
      <MenuFooter></MenuFooter>
    </>
  );
}

export default App;
