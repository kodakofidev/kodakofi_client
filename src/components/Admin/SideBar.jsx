import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import iconCoffee from "../../assets/icon/coffee.svg";
import iconDashboard from "../../assets/icon/dashboard.svg";
import iconProduct from "../../assets/icon/product.svg";
import iconOrders from "../../assets/icon/orders.svg";
import iconUser from "../../assets/icon/user.svg";
import iconLogout from "../../assets/icon/logout.svg";
import iconArrowRight from "../../assets/icon/arrow-right.svg";

const SideBar = () => {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const sidebarRef = useRef(null);

  // Check if mobile on mount and on resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Handle clicks outside sidebar to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobile && mobileMenuOpen && 
          sidebarRef.current && 
          !sidebarRef.current.contains(event.target) &&
          !event.target.closest('button')?.classList.contains('mobile-menu-button')) {
        setMobileMenuOpen(false);
        document.body.style.overflow = "auto";
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobile, mobileMenuOpen]);

  // Toggle sidebar expansion for desktop
  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = !mobileMenuOpen ? "hidden" : "auto";
  };

  // Check if route is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Menu items with SVG icons
  const menuItems = [
    { icon: iconDashboard, label: "Dashboard", path: "/admin" },
    { icon: iconProduct, label: "Products", path: "/admin/products" },
    { icon: iconOrders, label: "Orders", path: "/admin/orders" },
    { icon: iconUser, label: "Users", path: "/admin/users" }
  ];

  // Mobile view
  if (isMobile) {
    return (
      <>
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="fixed left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-r-lg shadow-md z-40 flex items-center justify-center mobile-menu-button"
        >
          <img 
            src={iconArrowRight} 
            alt="Menu" 
            className={`w-5 h-5 transition-transform ${mobileMenuOpen ? "rotate-180" : ""}`} 
          />
        </button>

        {/* Backdrop/Overlay - closes sidebar when clicked */}
        {mobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/20 z-30"
            onClick={() => {
              setMobileMenuOpen(false);
              document.body.style.overflow = "auto";
            }}
          ></div>
        )}

        {/* Mobile Sidebar */}
        <div
          ref={sidebarRef}
          className={`fixed top-[64px] left-0 h-[calc(100vh-64px)] bg-white shadow-lg z-40 w-64 transform transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 bg-[#542915]/5">
              <div className="flex items-center">
                <img 
                  src={iconCoffee} 
                  alt="Panel Admin" 
                  className="w-8 h-8 filter brightness-0 sepia-100 hue-rotate-[305deg] saturate-[85%]" 
                />
                <span className="ml-3 font-bold text-[#542915]">
                  Panel Admin
                </span>
              </div>
              <button 
                onClick={toggleMobileMenu}
                className="text-gray-500 hover:text-[#FF8906] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex-grow p-4 overflow-y-auto">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className={`flex items-center px-4 py-3 mb-2 rounded-md transition-all ${
                    isActive(item.path)
                      ? "bg-[#FF8906]/15 text-[#FF8906] font-bold"
                      : "text-gray-700 hover:bg-[#FF8906]/5 hover:text-[#FF8906] hover:font-semibold"
                  }`}
                  onClick={toggleMobileMenu}
                >
                  <div className="text-center w-8">
                    <img 
                      src={item.icon} 
                      alt={item.label} 
                      className={`w-5 h-5 mx-auto transition-all ${
                        isActive(item.path)
                          ? "filter brightness-100 drop-shadow-[0_0_1px_rgba(255,137,6,0.5)]"
                          : "filter brightness-0 opacity-70"
                      }`} 
                    />
                  </div>
                  <span className="ml-3">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>

            {/* Logout Button */}
            <div className="border-t border-gray-200 p-4 bg-[#542915]/5">
              <button
                className="flex items-center rounded-md transition-all w-full font-medium 
                  px-4 py-2 text-gray-700 hover:bg-red-500 hover:text-white hover:shadow-md active:scale-95"
              >
                <img 
                  src={iconLogout} 
                  alt="Logout" 
                  className="w-5 h-5 filter brightness-0 opacity-70 hover:brightness-0 hover:invert" 
                />
                <span className="ml-3">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Desktop sidebar
  return (
    <aside 
      ref={sidebarRef}
      className={`fixed top-16 left-0 h-[calc(100vh-64px)] bg-gradient-to-b from-white to-gray-50 shadow-lg transition-all duration-300 z-40 ${
        expanded ? "w-64" : "w-20"
      }`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className="flex flex-col h-full overflow-x-hidden">
        {/* Sidebar Header */}
        <div 
          className="flex items-center px-6 py-5 border-b border-gray-200 cursor-pointer bg-[#542915]/5"
        >
          <div className="flex items-center">
            <img 
              src={iconCoffee} 
              alt="Panel Admin" 
              className="w-8 h-8 filter brightness-0 sepia-100 hue-rotate-[305deg] saturate-[85%]" 
            />
            {expanded && (
              <span className="ml-3 font-bold text-[#542915] transition-opacity duration-200">
                Panel Admin
              </span>
            )}
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col flex-grow py-4 overflow-y-auto overflow-x-hidden">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center px-4 py-3 mx-2 rounded-md transition-all ${
                isActive(item.path)
                  ? "bg-[#FF8906]/15 text-[#FF8906] font-bold"
                  : "text-gray-700 hover:bg-[#FF8906]/5 hover:text-[#FF8906] hover:font-semibold"
              }`}
            >
              <div className="text-center w-8">
                <img 
                  src={item.icon} 
                  alt={item.label} 
                  className={`w-5 h-5 mx-auto transition-all ${
                    isActive(item.path)
                      ? "filter brightness-100 drop-shadow-[0_0_1px_rgba(255,137,6,0.5)]"
                      : "filter brightness-0 opacity-70"
                  }`} 
                />
              </div>
              {expanded && (
                <span className={`ml-3 transition-all duration-200 ${isActive(item.path) ? 'font-bold' : ''}`}>
                  {item.label}
                </span>
              )}
            </Link>
          ))}
        </div>

        {/* Logout Button */}
        <div className="border-t border-gray-200 p-4 bg-[#542915]/5">
          <button
            className={`flex items-center rounded-md transition-all w-full font-medium cursor-pointer
              ${expanded ? "px-4 py-2" : "px-2 py-2 justify-center"}
              text-gray-700 hover:bg-red-500 hover:text-white hover:shadow-md active:scale-95`}
          >
            <img 
              src={iconLogout} 
              alt="Logout" 
              className="w-5 h-5 filter brightness-0 opacity-70 hover:brightness-0 hover:invert" 
            />
            {expanded && <span className="ml-3">Logout</span>}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;