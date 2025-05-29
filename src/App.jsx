import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import CustomNavbar from "./Components/CustomNavbar";
import FreeServicesNavbar from "./Components/FreeServicesNavbar";
import Footer from "./Components/Footer";
import AppRouter from "./Pages/Router";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Slider1 from "./Components/Slider1";
import { useLocation } from "react-router-dom";
import Home from "./Pages/Home";
function App() {
  return (
    <>
      <Navbar />
      <CustomNavbar />
      <FreeServicesNavbar />
      <Home />

      <AppRouter />

      <Footer />
    </>
  );
}

export default App;
