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
  const { data } = useSelector((state) => state.order);
  console.log(data.length, "123");
  const dispatch = useDispatch();
  const location = useLocation();

  const { isLogin, user } = auth;
  const profileData = profile.data;
  const isAdmin = user?.role === "admin";

  // Use profile data if available, fallback to auth user data
  const userFullName =
    profileData?.fullName || user?.name || user?.email?.split("@")[0];
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
      if (isDropdownOpen && !event.target.closest(".profile-dropdown")) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDropdownOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full bg-black/80 text-white backdrop-blur-lg">
        <div className="flex items-center justify-between px-4 py-4 md:px-12 lg:px-8 xl:px-24">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex cursor-pointer items-center gap-3">
              <img
                src={iconCoffee}
                alt="Logo"
                className="inline-block h-8 w-8"
              />
              <p className="text-lg font-bold">Coffee Shop</p>
            </Link>

            {/* Navigation links - Hidden for Admin */}
            {!isAdmin && (
              <nav className="ml-12 hidden gap-6 md:flex">
                <Link
                  to="/"
                  className={`relative text-white after:absolute after:bottom-[-4px] after:left-0 after:content-[''] ${location.pathname === "/" ? "after:w-full" : "after:w-0 hover:after:w-full"} cursor-pointer after:h-[3px] after:bg-[#FF8906] after:transition-all after:duration-300 after:ease-in-out`}
                  style={{ position: "relative", display: "inline-block" }}
                >
                  Home
                </Link>
                <Link
                  to="/products"
                  className={`relative text-white after:absolute after:bottom-[-4px] after:left-0 after:content-[''] ${location.pathname.startsWith("/product") ? "after:w-full" : "after:w-0 hover:after:w-full"} cursor-pointer after:h-[3px] after:bg-[#FF8906] after:transition-all after:duration-300 after:ease-in-out`}
                  style={{ position: "relative", display: "inline-block" }}
                >
                  Product
                </Link>
              </nav>
            )}

            {/* Admin should have a special indicator */}
            {isAdmin && (
              <div className="hidden items-center md:flex">
                <span className="rounded-md bg-[#FF8906] px-2 py-1 text-xs font-bold text-black">
                  ADMIN
                </span>
              </div>
            )}
          </div>

          {/* Search, Cart, Profile Section */}
          <div className="hidden items-center gap-4 md:flex">
            {!isAdmin && (
              <>
                <img
                  src={searchLogo}
                  alt="Search"
                  className="inline-block h-8 w-8 cursor-pointer"
                />
                <div className="relative">
                  <img
                    src={cartLogo}
                    alt="Cart"
                    className="inline-block h-8 w-8 cursor-pointer"
                  />
                  {data > 0 ? (
                    <p className="bg-p-1 absolute -top-2.5 -right-0.5 rounded-full text-[12px] font-bold text-white">
                      {data.length}
                    </p>
                  ) : (
                    <></>
                  )}
                </div>
              </>
            )}

            {/* Conditional rendering based on login status */}
            {isLogin ? (
              <div className="profile-dropdown relative">
                <div
                  onClick={toggleDropdown}
                  className="flex cursor-pointer items-center gap-2"
                >
                  <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-[#FF8906] bg-gray-300">
                    <img
                      src={userPicture}
                      alt="Profile"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="font-semibold">{userFullName}</span>
                </div>

                {/* Dropdown menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 z-50 mt-2 w-48 rounded-md bg-white py-1 text-black shadow-lg">
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
                      className="block w-full px-4 py-2 text-left text-red-500 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  to={"/auth"}
                  className="cursor-pointer rounded-md border-2 border-white bg-transparent px-3 py-2 font-bold text-white transition-all duration-300 ease-in-out hover:bg-[#FF8906] hover:text-black active:scale-95"
                >
                  Sign In
                </Link>
                <Link
                  to={"/auth/register"}
                  className="cursor-pointer rounded-md border-2 border-[#FF8906] bg-[#FF8906] px-3 py-2 font-bold text-black transition-all duration-300 ease-in-out hover:border-white hover:bg-transparent hover:text-white active:scale-95"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="flex h-6 w-6 cursor-pointer flex-col items-center justify-center gap-1 md:hidden"
            onClick={toggleSidebar}
          >
            <span
              className={`block h-0.5 w-full bg-white transition-transform ${
                isSidebarOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-white transition-opacity ${
                isSidebarOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-white transition-transform ${
                isSidebarOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile sidebar */}
        <div
          className={`fixed top-[64px] right-0 h-screen min-w-full transform bg-black/80 text-white backdrop-blur-lg transition-transform ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ zIndex: 40 }}
        >
          <div className="flex flex-col gap-4 p-4">
            {/* Show user profile if logged in */}
            {isLogin && (
              <div className="mb-4 flex items-center gap-3 border-b border-gray-600 pb-4">
                <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-[#FF8906] bg-gray-300">
                  <img
                    src={userPicture}
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">{userFullName}</p>
                  <p className="text-sm text-gray-300">{user.email}</p>
                  {isAdmin && (
                    <span className="mt-1 inline-block rounded bg-[#FF8906] px-2 py-0.5 text-xs font-bold text-black">
                      ADMIN
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Only show Home and Product links for non-admin users */}
            {!isAdmin && (
              <>
                <Link
                  to="/"
                  className={`relative text-white after:absolute after:bottom-[-4px] after:left-0 after:content-[''] ${location.pathname === "/" ? "after:w-full" : "after:w-0 hover:after:w-full"} cursor-pointer after:h-[3px] after:bg-[#FF8906] after:transition-all after:duration-300 after:ease-in-out`}
                  onClick={toggleSidebar}
                  style={{ position: "relative", display: "inline-block" }}
                >
                  Home
                </Link>
                <Link
                  to="/products"
                  className={`relative text-white after:absolute after:bottom-[-4px] after:left-0 after:content-[''] ${location.pathname.startsWith("/product") ? "after:w-full" : "after:w-0 hover:after:w-full"} cursor-pointer after:h-[3px] after:bg-[#FF8906] after:transition-all after:duration-300 after:ease-in-out`}
                  onClick={toggleSidebar}
                  style={{ position: "relative", display: "inline-block" }}
                >
                  Product
                </Link>
              </>
            )}

            {/* Show appropriate links based on login status */}
            {isLogin ? (
              <>
                <Link
                  to="/profile"
                  className="cursor-pointer text-white"
                  onClick={toggleSidebar}
                >
                  Profile
                </Link>
                {isAdmin && (
                  <Link
                    to="/admin"
                    className="cursor-pointer text-white"
                    onClick={toggleSidebar}
                  >
                    Dashboard
                  </Link>
                )}
                {/* Only show Order History for non-admin users */}
                {!isAdmin && (
                  <Link
                    to="/history"
                    className="cursor-pointer text-white"
                    onClick={toggleSidebar}
                  >
                    Order History
                  </Link>
                )}
                <button
                  onClick={openLogoutModal}
                  className="cursor-pointer text-left text-red-500"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="mt-4 flex gap-4">
                <Link
                  to={"/auth"}
                  onClick={toggleSidebar}
                  className="cursor-pointer rounded-md border-2 border-white bg-transparent px-3 py-2 font-bold text-white transition-all duration-300 ease-in-out hover:bg-[#FF8906] hover:text-black active:scale-95"
                >
                  Sign In
                </Link>
                <Link
                  to={"/auth/register"}
                  onClick={toggleSidebar}
                  className="cursor-pointer rounded-md border-2 border-[#FF8906] bg-[#FF8906] px-3 py-2 font-bold text-black transition-all duration-300 ease-in-out hover:border-white hover:bg-transparent hover:text-white active:scale-95"
                >
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
