import Routes from "./routes/index.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MenuFooter from "./components/MenuFooter";
import Header from "./components/DESKTOP/Header";
import { useViewport } from './providers/GetViewport'

function App() {
  const { viewport: { width } } = useViewport()

  return (
    <>
      <ToastContainer />
      {width < 769 ? <MenuFooter /> : <Header />}
      <Routes />
      
    </>
  );
}

export default App;
