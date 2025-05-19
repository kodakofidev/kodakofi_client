import React from "react";
import { useDispatch } from "react-redux";
import { authAction } from "../../redux/slices/auth";
import { profileAction } from "../../redux/slices/profile"; // Add this import
import { toast } from "react-toastify";

const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authAction.logOut());
    dispatch(profileAction.resetProfile()); // Clear profile data on logout
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    toast.success("Successfully logged out");
    
    if (onConfirm) {
      onConfirm();
    } else {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div 
        className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md transform transition-all animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center">
          <svg 
            className="w-16 h-16 text-yellow-500 mb-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
            />
          </svg>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Confirm Logout</h3>
          <p className="text-gray-600 text-center mb-6">
            Are you sure you want to log out? You'll need to sign in again to access your account.
          </p>
          <div className="flex gap-4 w-full">
            <button
              onClick={onClose}
              className="flex-1 py-2 px-4 bg-gray-200 hover:bg-gray-300 rounded-md font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleLogout}
              className="flex-1 py-2 px-4 bg-red-500 text-white hover:bg-red-600 rounded-md font-medium transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
