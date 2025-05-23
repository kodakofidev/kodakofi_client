import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import SideBar from "../components/Admin/SideBar";
import { useSelector } from "react-redux";
import AddProductAdmin from "../components/Admin/listProducts/AddProductAdmin";
import EditProductAdmin from "../components/Admin/listProducts/EditProductAdmin";
import ProductAdminEdit from "../components/Admin/listProducts/ProductAdminEdit";
import ModalsDetailOrder from "../components/Admin/ordersAdmin/ModalsDetailOrder";
import AddUserAdmin from "../components/Admin/usersAdmin/AddUserAdmin";
import EditUserAdmin from "../components/Admin/usersAdmin/EditUserAdmin";

const AdminLayouts = () => {
  const [isMobile, setIsMobile] = useState(false);
  const isModalOpen = useSelector((state) => state.modals);

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
      <div className="relative min-h-[calc(100vh-64px)] pt-16">
        <SideBar />
        <div
          className={`transition-all duration-300 px-6 py-4 ${
            !isMobile ? "ml-20" : ""
          }`}
        >
          <Outlet />
        </div>

        {/* modals */}
        <div className={`${isModalOpen.addProduct ? "translate-x-0" : "translate-x-[100%]"} overflow-y-hidden absolute top-0 left-0 right-0 bottom-0`} >
          <AddProductAdmin />
        </div>
        <div className={`${isModalOpen.editProduct ? "translate-x-0" : "translate-x-[100%]"} absolute top-0 left-0 right-0 bottom-0`} >
          <ProductAdminEdit />
        </div>
        <div className={`${isModalOpen.detailOrder ? "translate-x-0" : "translate-x-[100%]"} absolute top-0 left-0 right-0 bottom-0`} >
          <ModalsDetailOrder />
        </div>
        <div className={`${isModalOpen.addUser ? "translate-x-0" : "translate-x-[100%]"} absolute top-0 left-0 right-0 bottom-0`} >
          <AddUserAdmin />
        </div>
        <div className={`${isModalOpen.editUser ? "translate-x-0" : "translate-x-[100%]"} absolute top-0 left-0 right-0 bottom-0`} >
          <EditUserAdmin />
        </div>
      </div>
    </main>
  );
};

export default AdminLayouts;
