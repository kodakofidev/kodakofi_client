import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Toast from "../components/common/ToastContainer";

const MainLayouts = () => {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
      <Toast />
    </main>
  );
};

export default MainLayouts;
