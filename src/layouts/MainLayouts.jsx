import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayouts = () => {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default MainLayouts;
