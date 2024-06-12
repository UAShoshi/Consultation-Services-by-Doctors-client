import { Outlet } from "react-router-dom";
import Footer from "../pages/Sheared/Footer";
import Navbar from "../pages/Sheared/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
     <Outlet></Outlet> 
    <Footer></Footer>
    </div>
  );
};

export default Root;