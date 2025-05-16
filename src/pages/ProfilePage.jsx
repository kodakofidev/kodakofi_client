import React, { useState } from "react";
import profilePicture from "/profilepicture.webp";
import profileIcon from "/icons/Profile.svg";
import mail from "/icons/mail.svg";
import phoneIcon from "/icons/phoneCall.svg";
import addressIcon from "/icons/location.svg";
import password from "/icons/Password.svg";
import eyeslash from "/icons/EyeSlash.svg";
import eye from "/icons/eye.svg";
import test from "/icons/download.jpg";

function ProfilePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showCheckPassword, setCheckShowPassword] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password change submitted");
    setIsModalOpen(false);
    e.target.currentPassword.value = ""
    e.target.newPassword.value = ""
    e.target.confirmPassword.value = ""
  };
  return (
    <main className="relative h-fit mb-28 px-4 lg:px-8 md:px-12 xl:px-24">
      <h1 className="text-2xl font-semibold pt-28 mb-14.25 lg:text-5xl">
        Profile
      </h1>
      <section className="lg:flex lg:justify-between lg:items-start">
        {/* PROFILE PICTURE */}
        <div className="flex flex-col gap-3.75 justify-center items-center py-6.5 border border-black/65 rounded-lg w-full h-fit lg:w-1/4">
          <p className="text-lg font-semibold lg:text-[22px]">Jing yuan</p>
          <p className="lg:text-[16px]">lordyuan@xianzhouluofu.hsr</p>
          <img
            src={profilePicture}
            alt=""
            className="rounded-[50%] max-lg:w-20 max-lg:h-20 lg:w-28 lg:h-28"
          />
          <button className="w-2/3 h-12 bg-(--secondary-color) rounded-lg hover:scale-[0.9] hover:text-white duration-500 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer">
            Upload New Photo
          </button>
          <p className="text-[14px]">
            Since <span className="font-semibold">January 20 2022</span>
          </p>
        </div>

        {/* FORM */}
        <form
          action=""
          className="flex flex-col gap-3.5 p-5 my-5 border border-black/65 rounded-lg w-full h-fit lg:p-10 lg:ml-25 lg:my-0"
        >
          {/* FULLNAME */}
          <div>
            <label htmlFor="fullname" className="text-[14px] font-semibold">
              Full Name
            </label>
            <div className="flex gap-3.5 p-3.5 mt-3.5 border rounded-md bg-[#FCFDFE]">
              <img
                src={profileIcon}
                alt="fullname"
                className="cursor-pointer"
              />
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Enter Your Fullname"
                className="outline-none w-full h-full"
              />
            </div>
          </div>
          {/* EMAIL */}
          <div>
            <label htmlFor="" className="text-[14px] font-semibold">
              Email
            </label>
            <div className="flex gap-3.5 p-3.5 mt-3.5 border rounded-md bg-[#FCFDFE]">
              <img src={mail} alt="email" className="cursor-pointer" />
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                className="outline-none w-full h-full"
              />
            </div>
          </div>
          {/* PHONE */}
          <div>
            <label htmlFor="phone" className="text-[14px] font-semibold">
              Phone
            </label>
            <div className="flex gap-3.5 p-3.5 mt-3.5 border rounded-md bg-[#FCFDFE]">
              <img src={phoneIcon} alt="phone" className="cursor-pointer" />
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter Your Phone"
                className="outline-none w-full h-full"
              />
            </div>
          </div>
          {/* ADDRESS */}
          <div>
            <label htmlFor="address" className="text-[14px] font-semibold">
              Address
            </label>
            <div className="flex gap-3.5 p-3.5 mt-3.5 border rounded-md bg-[#FCFDFE]">
              <img src={addressIcon} alt="address" className="cursor-pointer" />
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Enter Your address"
                className="outline-none w-full h-full"
              />
            </div>
          </div>

          <button className="w-full py-2.5 rounded-md bg-(--secondary-color) hover:scale-[0.9] hover:text-white duration-500 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer">
            submit
          </button>
          <p
            onClick={() => setIsModalOpen(true)}
            className="font-semibold text-(--secondary-color) w-fit hover:font-bold cursor-pointer"
          >
            Set New Password
          </p>
        </form>
      </section>

      {/* MODAL pop up */}
      {isModalOpen && (
        <section className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Set New Password</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Current Password
                </label>
                <div className="flex gap-3.5 p-3.5 mt-3.5 border rounded-md">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={currentPassword}
                    name="currentPassword"
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full h-full outline-none"
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
                <label className="block text-sm font-medium mb-1">
                  New Password
                </label>
                <div className="flex gap-3.5 p-3.5 mt-3.5 border rounded-md">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    value={newPassword}
                    name="newPassword"
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full h-full outline-none"
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
                <label className="block text-sm font-medium mb-1">
                  Confirm New Password
                </label>
                <div className="flex gap-3.5 p-3.5 mt-3.5 border rounded-md">
                  <input
                    type={showCheckPassword ? "text" : "password"}
                    value={confirmPassword}
                    name="confirmPassword"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full h-full outline-none"
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
                  className="px-4 py-2 border rounded-md hover:bg-gray-100 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-(--secondary-color) text-white rounded-md hover:opacity-90 cursor-pointer"
                >
                  Change Password
                </button>
              </div>
            </form>
          </div>
        </section>
      )}
    </main>
  );
}

export default ProfilePage;
