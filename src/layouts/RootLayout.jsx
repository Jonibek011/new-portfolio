import { Outlet } from "react-router-dom";
//components
import { Navbar } from "../components";
function RootLayout() {
  return (
    <div className="custom-container relative  ">
      <div className="root">
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default RootLayout;
