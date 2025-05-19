import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router";
import { toast } from 'react-toastify';
import constants from "../../configs/constant.js";
import { authAction } from "../../redux/slices/auth.js";
import { profileAction } from "../../redux/slices/profile.js"; // Add this import

function AuthCallback() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Check if we already have direct token in URL (direct callback)
        const token = searchParams.get("token");
        const email = searchParams.get("email");
        const name = searchParams.get("name");
        const role = searchParams.get("role") || "user"; 
        const id = searchParams.get("id"); // Get the actual user ID
        
        console.log("Received callback params:", { token, email, name, role, id });
        
        if (token) {
          toast.success("Successfully logged in with Google!");
          
          // We have direct token, store it in Redux with actual user ID
          dispatch(authAction.addAuth({
            user: {
              id: id || email, // Use the real ID if available, fallback to email
              role: role,
              token: token,
              email: email,
              name: name || email.split("@")[0]
            },
            isLogin: true
          }));
          
          // Fetch user profile after OAuth login
          dispatch(profileAction.fetchProfileStart());
          try {
            const profileResponse = await fetch(`${constants.apiUrl}/profile`, {
              headers: {
                'Authorization': `Bearer ${token}`
              }
            });
            
            if (profileResponse.ok) {
              const profileData = await profileResponse.json();
              if (profileData.data) {
                dispatch(profileAction.fetchProfileSuccess(profileData.data));
              }
            }
          } catch (profileError) {
            console.error("Profile fetch error:", profileError);
            dispatch(profileAction.fetchProfileFailure("Failed to load profile"));
          }
          
          // Also store in localStorage as backup
          localStorage.setItem("token", token);
          localStorage.setItem("userRole", role);
          
          // Redirect to appropriate page based on role
          navigate(role === "admin" ? "/admin" : "/");
          return;
        }
        
        // If we have code but no token, we need to exchange it
        const code = searchParams.get("code");
        if (code) {
          // Exchange code for token through our API using fetch instead of axios
          const response = await fetch(
            `${constants.apiUrl}/auth/google/callback${window.location.search}`
          );
          
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          
          const responseData = await response.json();
          console.log("OAuth callback response:", responseData);
          if (responseData && responseData.status === 200) {
            // Store auth data in Redux
            dispatch(authAction.addAuth({
              user: {
                id: responseData.data.email,
                role: responseData.data.role || "user", // Use role from response or default to "user"
                token: responseData.data.token,
                email: responseData.data.email,
                name: responseData.data.name || responseData.data.email.split("@")[0]
              },
              isLogin: true
            }));
            
            // Also store token in localStorage as backup
            localStorage.setItem("token", responseData.data.token);
            if (responseData.data.role) {
              localStorage.setItem("userRole", responseData.data.role);
            }
            
            // Redirect to home page or admin page based on role
            navigate(responseData.data.role === "admin" ? "/admin" : "/");
            return;
          } else {
            throw new Error(responseData.message || "Authentication failed");
          }
        }
        
        throw new Error("Missing required authentication parameters");
      } catch (err) {
        console.error("OAuth callback error:", err);
        toast.error(err.message || "Authentication failed");
        setError(err.message || "Authentication failed");
      } finally {
        setLoading(false);
      }
    };

    handleCallback();
  }, [navigate, searchParams, dispatch]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="p-8 bg-white rounded shadow-md text-center">
          <h2 className="text-xl font-bold mb-4">Authenticating with Google...</h2>
          <p>Please wait while we complete your sign in.</p>
          <div className="mt-4 w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="p-8 bg-white rounded shadow-md text-center">
          <h2 className="text-xl font-bold text-red-600 mb-4">Authentication Error</h2>
          <p className="mb-4">{error}</p>
          <button 
            onClick={() => navigate("/auth")}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Back to Login
          </button>
        </div>
      </div>
    );
  }

  return null; // This should rarely be seen as we redirect immediately
}

export default AuthCallback;