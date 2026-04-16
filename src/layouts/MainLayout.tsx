import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
      <div>
          <Navbar />
          {/* <Sidebar /> */}
          <Outlet />
          <Footer/>
    </div>
  )
}

export default MainLayout;