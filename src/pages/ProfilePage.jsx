import React, { useState, useRef, useEffect } from "react";
import profilePicture from "/profilepicture.webp";
import profileIcon from "/icons/Profile.svg";
import mail from "/icons/mail.svg";
import phoneIcon from "/icons/phoneCall.svg";
import addressIcon from "/icons/location.svg";
import eyeslash from "/icons/EyeSlash.svg";
import eye from "/icons/eye.svg";

function ProfilePage() {
  const [profileData, setProfileData] = useState({
    fullname: "",
    phone: "",
    address: "",
    email: "",
    image: profilePicture,
    joinDate: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showCheckPassword, setCheckShowPassword] = useState(false);

  // PROFILE PICTURE MODAL STATES
  const [isProfilePicModalOpen, setIsProfilePicModalOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(profilePicture);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
  });

  // Fetch profile data
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiNDM0YjVlYTMtYzUwYS00MGY0LTk3ZTctMjM2MDdlMWMxZDRlIiwiZW1haWwiOiJwZW5kcmFnb25rYWRvYzUxQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiaXNzIjoia29kYSBrb2ZpIiwiZXhwIjoxNzQ3Njg5MjUxfQ.vhPvtfLBbpVdsHpDlN1C-txBQpQBNkyjnhuzZDW5EWo";
        if (!token) {
          throw new Error("Authentication token not found");
        }

        const response = await fetch("http://localhost:8080/api/profile", {
        method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const reponsDdata = await response.json();

        console.log("[DEBUGGING]",reponsDdata.data)

        // Transform and set the data
        setProfileData({
          fullname: reponsDdata.data.fullname || "",
          phone: reponsDdata.data.phone || "",
          address: reponsDdata.data.address || "",
          email: reponsDdata.data.email || "",
          image: reponsDdata.data.image || profilePicture,
          joinDate: reponsDdata.data.created_at
            ? new Date(reponsDdata.data.created_at).toLocaleDateString()
            : "Unknown date",
        });

        setFormData({
          fullname: reponsDdata.data.fullname || "",
          phone: reponsDdata.data.phone || "",
          address: reponsDdata.data.address || "",
          email: reponsDdata.data.email || "",
        });
      } catch (err) {
        console.error("Failed to fetch profile:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  // Render loading state
  if (loading) {
    return <div className="py-8 text-center">Loading profile...</div>;
  }

  // Render error state
  if (error) {
    return (
      <div className="py-8 text-center text-red-500">
        Error loading profile: {error}
      </div>
    );
  }

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // get data
  const getData = async (e) => {
    e.preventDefault();

    const form = e.target;
    const { fullname, email, phone, address } = form;

    try {
      const payload = {};

      if (fullname.value.trim() !== "")
        payload.fullname = fullname.value.trim();
      if (email.value.trim() !== "") payload.email = email.value.trim();
      if (phone.value.trim() !== "") payload.phone = phone.value.trim();
      if (address.value.trim() !== "") payload.address = address.value.trim();

      // If no fields were changed, exit early
      if (Object.keys(payload).length === 0) {
        alert("No changes detected");
        return;
      }
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiNDM0YjVlYTMtYzUwYS00MGY0LTk3ZTctMjM2MDdlMWMxZDRlIiwiZW1haWwiOiJwZW5kcmFnb25rYWRvYzUxQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiaXNzIjoia29kYSBrb2ZpIiwiZXhwIjoxNzQ3Njc5OTUzfQ.wYtZqBHSNy4YweTgLNUTG_qfeboURFm-idWTjFQEv1A";

      const response = await fetch("http://localhost:8080/api/profile/edit", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update profile");
      }

      console.log("Profile updated successfully");
      setIsModalOpen(false);
      form.reset();
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to update profile: " + error.message);
    }
  };

  // SHOW CURRENT PASSWORD
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // SHOW NEW PASSWORD
  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  // SHOW CHECK PASSWORD
  const toggleCheckPasswordVisibility = () => {
    setCheckShowPassword(!showCheckPassword);
  };

  // Handle profile picture upload using Fetch API
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type and size
    if (!file.type.match("image.*")) {
      setUploadError("Please select an image file");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setUploadError("File size must be less than 2MB");
      return;
    }

    setIsUploading(true);
    setUploadError(null);

    try {
      const formData = new FormData();
      formData.append("profileImage", file);
      // formData.append("userId", "123");

      const response = await fetch("/api/profile/edit", {
        method: "PATCH",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      const data = await response.json();
      setProfileImage(data.imageUrl);
      setIsProfilePicModalOpen(false);
    } catch (error) {
      console.error("Upload failed:", error);
      setUploadError(error.message || "Failed to upload image");
    } finally {
      setIsUploading(false);
    }
  };

  // Trigger file input click
  const handleUploadClick = () => {
    setUploadError(null);
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const { fullname, email, phone, address } = form;

    // Validate only if email is being updated
    if (email.value && email.value.trim() !== "") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value)) {
        alert("Please enter a valid email address");
        return;
      }
    }

    try {
      const payload = {};

      if (fullname.value.trim() !== "")
        payload.fullname = fullname.value.trim();
      if (email.value.trim() !== "") payload.email = email.value.trim();
      if (phone.value.trim() !== "") payload.phone = phone.value.trim();
      if (address.value.trim() !== "") payload.address = address.value.trim();

      // If no fields were changed, exit early
      if (Object.keys(payload).length === 0) {
        alert("No changes detected");
        return;
      }
      const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiNDM0YjVlYTMtYzUwYS00MGY0LTk3ZTctMjM2MDdlMWMxZDRlIiwiZW1haWwiOiJwZW5kcmFnb25rYWRvYzUxQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiaXNzIjoia29kYSBrb2ZpIiwiZXhwIjoxNzQ3Njg5MjUxfQ.vhPvtfLBbpVdsHpDlN1C-txBQpQBNkyjnhuzZDW5EWo"
      const response = await fetch("http://localhost:8080/api/profile/edit", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update profile");
      }

      console.log("Profile updated successfully");
      getData()
      setIsModalOpen(false);
      form.reset();
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to update profile: " + error.message);
    }
  };

  const handlePass = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!currentPassword || !newPassword || !confirmPassword) {
      alert("Please fill in all password fields");
      return;
    }

    // Check if new password meets requirements (min 8 chars)
    if (newPassword.length < 8) {
      alert("New password must be at least 8 characters long");
      return;
    }

    // Check if passwords match
    if (newPassword !== confirmPassword) {
      alert("New passwords don't match");
      return;
    }

    // Check if new password is different from current
    if (currentPassword === newPassword) {
      alert("New password must be different from current password");
      return;
    }
  };
  return (
    <main className="relative mb-28 h-fit px-4 md:px-12 lg:px-8 xl:px-24">
      <h1 className="mb-14.25 pt-28 text-2xl font-semibold lg:text-5xl">
        Profile
      </h1>
      <section className="lg:flex lg:items-start lg:justify-between">
        {/* PROFILE PICTURE */}
        <div className="flex h-fit w-full flex-col items-center justify-center gap-3.75 rounded-lg border border-black/65 py-6.5 lg:w-1/4">
          <p className="text-lg font-semibold lg:text-[22px]">
            {profileData.fullname || "User"}
          </p>
          <p className="lg:text-[16px]">{profileData.email}</p>
          <img
            src={profilePicture}
            alt=""
            onClick={() => setIsProfilePicModalOpen(true)}
            className="cursor-pointer rounded-[50%] max-lg:h-20 max-lg:w-20 lg:h-28 lg:w-28"
          />
          <button
            onClick={handleUploadClick}
            disabled={isUploading}
            className={`h-12 w-2/3 cursor-pointer rounded-lg bg-(--secondary-color) duration-500 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[0.9] hover:text-white ${
              isUploading ? "opacity-70" : ""
            }`}
          >
            {isUploading ? "Uploading..." : "Upload New Photo"}
          </button>
          <p className="text-[14px]">
            Since <span className="font-semibold">January 20 2022</span>
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="my-5 flex h-fit w-full flex-col gap-3.5 rounded-lg border border-black/65 p-5 lg:my-0 lg:ml-25 lg:p-10"
        >
          {/* FULLNAME */}
          <div>
            <label htmlFor="fullname" className="text-[14px] font-semibold">
              Full Name
            </label>
            <div className="mt-3.5 flex gap-3.5 rounded-md border bg-[#FCFDFE] p-3.5">
              <img
                src={profileIcon}
                alt="fullname"
                className="cursor-pointer"
              />
              <input
                type="text"
                name="fullname"
                id="fullname"
                // defaultValue={profileData.fullname}
                value={formData.fullname}
                onChange={handleInputChange}
                placeholder={formData.fullname ? "" : "Enter your name"}
                className="h-full w-full outline-none"
              />
            </div>
          </div>
          {/* EMAIL */}
          <div>
            <label htmlFor="" className="text-[14px] font-semibold">
              Email
            </label>
            <div className="mt-3.5 flex gap-3.5 rounded-md border bg-[#FCFDFE] p-3.5">
              <img src={mail} alt="email" className="cursor-pointer" />
              <input
                type="text"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={formData.email ? "" : "Enter your Email"}
                className="h-full w-full outline-none"
              />
            </div>
          </div>
          {/* PHONE */}
          <div>
            <label htmlFor="phone" className="text-[14px] font-semibold">
              Phone
            </label>
            <div className="mt-3.5 flex gap-3.5 rounded-md border bg-[#FCFDFE] p-3.5">
              <img src={phoneIcon} alt="phone" className="cursor-pointer" />
              <input
                type="text"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder={formData.fullname ? "" : "Enter your phone"}
                className="h-full w-full outline-none"
              />
            </div>
          </div>
          {/* ADDRESS */}
          <div>
            <label htmlFor="address" className="text-[14px] font-semibold">
              Address
            </label>
            <div className="mt-3.5 flex gap-3.5 rounded-md border bg-[#FCFDFE] p-3.5">
              <img src={addressIcon} alt="address" className="cursor-pointer" />
              <input
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder={formData.address ? "" : "Enter your address"}
                className="h-full w-full outline-none"
              />
            </div>
          </div>

          <button className="w-full cursor-pointer rounded-md bg-(--secondary-color) py-2.5 duration-500 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[0.9] hover:text-white">
            submit
          </button>
          <p
            onClick={() => setIsModalOpen(true)}
            className="w-fit cursor-pointer font-semibold text-(--secondary-color) hover:font-bold"
          >
            Set New Password
          </p>
        </form>
      </section>

      {/* MODAL pop up password*/}
      {isModalOpen && (
        <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="mx-4 w-full max-w-md rounded-lg bg-white p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Set New Password</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="cursor-pointer text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handlePass} className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Current Password
                </label>
                <div className="mt-3.5 flex gap-3.5 rounded-md border p-3.5">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={currentPassword}
                    name="currentPassword"
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="h-full w-full outline-none"
                    required
                  />
                  <img
                    src={showPassword ? eyeslash : eye}
                    alt={showPassword ? "show password" : "hide password"}
                    onClick={togglePasswordVisibility}
                    className="cursor-pointer"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium">
                  New Password
                </label>
                <div className="mt-3.5 flex gap-3.5 rounded-md border p-3.5">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    value={newPassword}
                    name="newPassword"
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="h-full w-full outline-none"
                    required
                  />
                  <img
                    src={showNewPassword ? eyeslash : eye}
                    alt={showNewPassword ? "show password" : "hide password"}
                    onClick={toggleNewPasswordVisibility}
                    className="cursor-pointer"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium">
                  Confirm New Password
                </label>
                <div className="mt-3.5 flex gap-3.5 rounded-md border p-3.5">
                  <input
                    type={showCheckPassword ? "text" : "password"}
                    value={confirmPassword}
                    name="confirmPassword"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="h-full w-full outline-none"
                    required
                  />
                  <img
                    src={showCheckPassword ? eyeslash : eye}
                    alt={showCheckPassword ? "show password" : "hide password"}
                    onClick={toggleCheckPasswordVisibility}
                    className="cursor-pointer"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="cursor-pointer rounded-md border px-4 py-2 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="cursor-pointer rounded-md bg-(--secondary-color) px-4 py-2 text-white hover:opacity-90"
                >
                  Change Password
                </button>
              </div>
            </form>
          </div>
        </section>
      )}

      {/* PROFILE PICTURE MODAL */}
      {isProfilePicModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="mx-4 w-full max-w-md rounded-lg bg-white p-6">
            {/* ... modal header ... */}
            <div className="flex flex-col items-center gap-4">
              <img
                src={profileImage}
                alt="Profile Preview"
                className="h-40 w-40 rounded-full object-cover"
              />
              {uploadError && (
                <p className="text-sm text-red-500">{uploadError}</p>
              )}
              <div className="flex w-full gap-3">
                <button
                  onClick={handleUploadClick}
                  disabled={isUploading}
                  className={`flex-1 cursor-pointer rounded-md bg-(--secondary-color) py-2 duration-500 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[0.9] hover:text-white ${
                    isUploading ? "opacity-70" : "hover:opacity-90"
                  }`}
                >
                  {isUploading ? "Uploading..." : "Change Photo"}
                </button>
                <button
                  onClick={() => setIsProfilePicModalOpen(false)}
                  className="flex-1 cursor-pointer rounded-md border py-2 duration-500 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[0.9] hover:bg-gray-100"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageUpload}
        accept="image/*"
        className="hidden"
      />
    </main>
  );
}

export default ProfilePage;
