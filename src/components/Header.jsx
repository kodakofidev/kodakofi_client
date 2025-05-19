import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authAction } from "../redux/slices/auth";
import { profileAction } from "../redux/slices/profile";
import iconCoffee from "../assets/icon/coffee.svg";
import cartLogo from "../assets/icon/cart.svg";
import searchLogo from "../assets/icon/search.svg";
import userIcon from "../assets/default-profile.avif"; // Add a default user icon
import LogoutModal from "./common/LogoutModal";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const auth = useSelector((state) => state.auth);
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const location = useLocation();

  const { isLogin, user } = auth;
  const profileData = profile.data;
  const isAdmin = user?.role === "admin";
  
  // Use profile data if available, fallback to auth user data
  const userFullName = profileData?.fullName || user?.name || user?.email?.split('@')[0];
  const userPicture = profileData?.picture || user?.picture || userIcon;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.body.style.overflowX = !isSidebarOpen ? "hidden" : "auto";
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const openLogoutModal = () => {
    setIsLogoutModalOpen(true);
    setIsDropdownOpen(false); // Close dropdown when opening modal
  };

  const handleLogout = () => {
    dispatch(authAction.logOut());
    dispatch(profileAction.resetProfile()); // Clear profile data on logout
    setIsDropdownOpen(false);
    setIsLogoutModalOpen(false);
    // Navigate to home page if needed
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest('.profile-dropdown')) {
        setIsDropdownOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownOpen]);

  return (
    <>
      <header className="fixed w-full top-0 left-0 bg-black/80 backdrop-blur-lg text-white z-50">
        <div className="px-4 lg:px-8 md:px-12 xl:px-24 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3 cursor-pointer">
              <img src={iconCoffee} alt="Logo" className="w-8 h-8 inline-block" />
              <p className="text-lg font-bold">Coffee Shop</p>
            </Link>
            
            {/* Navigation links - Hidden for Admin */}
            {!isAdmin && (
              <nav className="hidden md:flex gap-6 ml-12">
                <Link
                  to="/"
                  className={`text-white relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 ${location.pathname === "/" ? "after:w-full" : "after:w-0 hover:after:w-full"} after:h-[3px] after:bg-[#FF8906] after:transition-all after:duration-300 after:ease-in-out cursor-pointer`}
                  style={{ position: "relative", display: "inline-block" }}>
                  Home
                </Link>
                <Link
                  to="/products"
                  className={`text-white relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 ${location.pathname.startsWith("/product") ? "after:w-full" : "after:w-0 hover:after:w-full"} after:h-[3px] after:bg-[#FF8906] after:transition-all after:duration-300 after:ease-in-out cursor-pointer`}
                  style={{ position: "relative", display: "inline-block" }}>
                  Product
                </Link>
              </nav>
            )}
            
            {/* Admin should have a special indicator */}
            {isAdmin && (
              <div className="hidden md:flex items-center">
                <span className="bg-[#FF8906] text-black px-2 py-1 rounded-md text-xs font-bold">ADMIN</span>
              </div>
            )}
          </div>
          
          {/* Search, Cart, Profile Section */}
          <div className="hidden md:flex gap-4 items-center">
            {!isAdmin && (
              <>
                <img src={searchLogo} alt="Search" className="w-8 h-8 inline-block cursor-pointer" />
                <img src={cartLogo} alt="Cart" className="w-8 h-8 inline-block cursor-pointer" />
              </>
            )}
            
            {/* Conditional rendering based on login status */}
            {isLogin ? (
              <div className="relative profile-dropdown">
                <div 
                  onClick={toggleDropdown}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden border-2 border-[#FF8906]">
                    <img 
                      src={userPicture} 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="font-semibold">{userFullName}</span>
                </div>
                
                {/* Dropdown menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg py-1 z-50">
                    <Link 
                      to="/profile" 
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Profile
                    </Link>
                    {isAdmin && (
                      <Link 
                        to="/admin" 
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Dashboard
                      </Link>
                    )}
                    {!isAdmin && (
                      <Link 
                        to="/history" 
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Order History
                      </Link>
                    )}
                    <button 
                      onClick={openLogoutModal}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to={"/auth"} className="border-2 border-white bg-transparent text-white px-3 py-2 font-bold rounded-md transition-all duration-300 ease-in-out hover:bg-[#FF8906] hover:text-black active:scale-95 cursor-pointer">
                  Sign In
                </Link>
                <Link to={"/auth/register"} className="bg-[#FF8906] text-black px-3 py-2 font-bold rounded-md border-2 border-[#FF8906] transition-all duration-300 ease-in-out hover:bg-transparent hover:text-white hover:border-white active:scale-95 cursor-pointer">
                  Sign Up
                </Link>
              </>
            )}
          </div>
          
          {/* Mobile menu button */}
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
        
        {/* Mobile sidebar */}
        <div
          className={`fixed top-[64px] right-0 h-screen bg-black/80 backdrop-blur-lg min-w-full text-white transform transition-transform ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ zIndex: 40 }}>
          <div className="p-4 flex flex-col gap-4">
            {/* Show user profile if logged in */}
            {isLogin && (
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-600">
                <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden border-2 border-[#FF8906]">
                  <img 
                    src={userPicture} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">{userFullName}</p>
                  <p className="text-sm text-gray-300">{user.email}</p>
                  {isAdmin && (
                    <span className="bg-[#FF8906] text-black px-2 py-0.5 rounded text-xs font-bold mt-1 inline-block">ADMIN</span>
                  )}
                </div>
              </div>
            )}
            
            {/* Only show Home and Product links for non-admin users */}
            {!isAdmin && (
              <>
                <Link
                  to="/"
                  className={`text-white relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 ${location.pathname === "/" ? "after:w-full" : "after:w-0 hover:after:w-full"} after:h-[3px] after:bg-[#FF8906] after:transition-all after:duration-300 after:ease-in-out cursor-pointer`}
                  onClick={toggleSidebar}
                  style={{ position: "relative", display: "inline-block" }}>
                  Home
                </Link>
                <Link
                  to="/products"
                  className={`text-white relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 ${location.pathname.startsWith("/product") ? "after:w-full" : "after:w-0 hover:after:w-full"} after:h-[3px] after:bg-[#FF8906] after:transition-all after:duration-300 after:ease-in-out cursor-pointer`}
                  onClick={toggleSidebar}
                  style={{ position: "relative", display: "inline-block" }}>
                  Product
                </Link>
              </>
            )}
            
            {/* Show appropriate links based on login status */}
            {isLogin ? (
              <>
                <Link
                  to="/profile"
                  className="text-white cursor-pointer"
                  onClick={toggleSidebar}>
                  Profile
                </Link>
                {isAdmin && (
                  <Link
                    to="/admin"
                    className="text-white cursor-pointer"
                    onClick={toggleSidebar}>
                    Dashboard
                  </Link>
                )}
                {/* Only show Order History for non-admin users */}
                {!isAdmin && (
                  <Link
                    to="/history"
                    className="text-white cursor-pointer"
                    onClick={toggleSidebar}>
                    Order History
                  </Link>
                )}
                <button
                  onClick={openLogoutModal}
                  className="text-red-500 cursor-pointer text-left"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="flex gap-4 mt-4">
                <Link 
                  to={"/auth"} 
                  onClick={toggleSidebar}
                  className="border-2 border-white bg-transparent text-white px-3 py-2 font-bold rounded-md transition-all duration-300 ease-in-out hover:bg-[#FF8906] hover:text-black active:scale-95 cursor-pointer">
                  Sign In
                </Link>
                <Link 
                  to={"/auth/register"} 
                  onClick={toggleSidebar}
                  className="bg-[#FF8906] text-black px-3 py-2 font-bold rounded-md border-2 border-[#FF8906] transition-all duration-300 ease-in-out hover:bg-transparent hover:text-white hover:border-white active:scale-95 cursor-pointer">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
      
      {/* Logout confirmation modal */}
      <LogoutModal 
        isOpen={isLogoutModalOpen} 
        onClose={() => setIsLogoutModalOpen(false)} 
        onConfirm={handleLogout}
      />
    </>
  );
};

export default Header;
