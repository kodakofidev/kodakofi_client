import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import SideBar from "../components/Admin/SideBar";

const AdminLayouts = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <main className="overflow-x-hidden">
      <Header />
      <div className="min-h-[calc(100vh-64px)] pt-16">
        <SideBar />
        <div
          className={`transition-all duration-300 px-6 py-4 ${
            !isMobile ? "ml-20" : ""
          }`}
        >
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default AdminLayouts;
