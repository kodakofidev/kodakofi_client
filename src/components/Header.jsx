import { Link } from "react-router";
import { useState, useEffect } from "react";
import iconCoffee from "../assets/icon/coffee.svg";
import cartLogo from "../assets/icon/cart.svg";
import searchLogo from "../assets/icon/search.svg";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.body.style.overflowX = !isSidebarOpen ? "hidden" : "auto";
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false);
        document.body.style.overflowX = "auto";
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed w-full top-0 left-0 bg-black/80 backdrop-blur-lg text-white z-50">
      <div className="px-4 lg:px-8 md:px-12 xl:px-24 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={iconCoffee} alt="Logo" className="w-8 h-8 inline-block mr-2" />
          <p className="text-lg font-bold mr-12">Coffee Shop</p>
          <nav className="hidden md:flex gap-6">
            <Link
              to="/"
              className="text-white relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[3px] after:bg-[#FF8906] hover:after:w-full after:transition-all after:duration-300 after:ease-in-out cursor-pointer"
              style={{ position: "relative", display: "inline-block" }}>
              Home
            </Link>
            <Link
              to="/"
              className="text-white relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[3px] after:bg-[#FF8906] hover:after:w-full after:transition-all after:duration-300 after:ease-in-out cursor-pointer"
              style={{ position: "relative", display: "inline-block" }}>
              Product
            </Link>
          </nav>
        </div>
        <div className="hidden md:flex gap-4 items-center">
          <img src={searchLogo} alt="Search" className="w-8 h-8 inline-block" />
          <img src={cartLogo} alt="Cart" className="w-8 h-8 inline-block" />
          <button className="border-2 border-white bg-transparent text-white px-3 py-2 font-bold rounded-md transition-all cursor-pointer duration-300 ease-in-out hover:bg-[#FF8906] hover:text-black active:scale-95">
            Sign In
          </button>
          <button className="bg-[#FF8906] text-black px-3 py-2 font-bold rounded-md border-2 border-[#FF8906] transition-all duration-300 ease-in-out hover:bg-transparent hover:text-white hover:border-white active:scale-95 cursor-pointer">
            Sign Up
          </button>
        </div>
        <button
          className="md:hidden flex flex-col gap-1 w-6 h-6 justify-center items-center cursor-pointer"
          onClick={toggleSidebar}>
          <span
            className={`block w-full h-0.5 bg-white transition-transform ${
              isSidebarOpen ? "rotate-45 translate-y-1.5" : ""
            }`}></span>
          <span
            className={`block w-full h-0.5 bg-white transition-opacity ${
              isSidebarOpen ? "opacity-0" : ""
            }`}></span>
          <span
            className={`block w-full h-0.5 bg-white transition-transform ${
              isSidebarOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}></span>
        </button>
      </div>
      <div
        className={`fixed top-[64px] right-0 h-screen bg-black/80 backdrop-blur-lg min-w-full text-white transform transition-transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ zIndex: 40 }}>
        <div className="p-4 flex flex-col gap-4">
          <Link
            to="/"
            className="text-white relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[3px] after:bg-[#FF8906] hover:after:w-full after:transition-all after:duration-300 after:ease-in-out cursor-pointer"
            style={{ position: "relative", display: "inline-block" }}>
            Home
          </Link>
          <Link
            to="/"
            className="text-white relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[3px] after:bg-[#FF8906] hover:after:w-full after:transition-all after:duration-300 after:ease-in-out cursor-pointer"
            style={{ position: "relative", display: "inline-block" }}>
            Product
          </Link>
          <div className="flex gap-4 mt-4">
            <button className="border-2 border-white bg-transparent text-white px-3 py-2 font-bold rounded-md transition-all duration-300 ease-in-out hover:bg-[#FF8906] hover:text-black active:scale-95 cursor-pointer">
              Sign In
            </button>
            <button className="bg-[#FF8906] text-black px-3 py-2 font-bold rounded-md border-2 border-[#FF8906] transition-all duration-300 ease-in-out hover:bg-transparent hover:text-white hover:border-white active:scale-95 cursor-pointer">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
