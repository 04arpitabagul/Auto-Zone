import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import CustomNavbar from "./Components/CustomNavbar";
import FreeServicesNavbar from "./Components/FreeServicesNavbar";
import Footer from "./Components/Footer";
import AppRouter from "./Pages/Router";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Slider1 from "./Components/Slider1";
function App() {
  return (
    <>
      <Navbar />
      <CustomNavbar />
      <FreeServicesNavbar />
      <Slider1 />

      <AppRouter />

      <Footer />
    </>
  );
}

export default App;
