import React from "react";
import Photo from "../../../assets/iconProductListAdmin/Photo.png";
import Edit from "../../../assets/iconProductListAdmin/Edit2.svg";
import Trash from "../../../assets/iconProductListAdmin/Trash.png";
import View from "../../../assets/iconProductListAdmin/ViewList.svg";
import { useDispatch } from "react-redux";
import { modalAction } from "../../../redux/slices/modalsAdmin";

export default function RowListUsersAdmin({
  image,
  fullName,
  phone,
  address,
  email,
  is_verified,
  created_at,
}) {
  const dispatch = useDispatch();
  return (
    <tr>
      <td className="flex items-center justify-center">
        <div className="flex h-22 w-full items-center justify-center">
          <input
            type="checkbox"
            name="selectProduct"
            id="selectProduct"
            className="scale-[1.2] cursor-pointer"
          />
        </div>
      </td>
      <td className="min-w-[160px] px-4 text-center text-sm">
        <div className="flex h-full w-full justify-center">
          <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-md">
            <img src={`${image}`} alt="image" />
          </div>
        </div>
      </td>
      <td className="min-w-[160px] px-4 text-center text-sm">
        {fullName === "" ? "-" : fullName}
      </td>
      <td className="min-w-[120px] px-4 text-center text-sm">
        {phone === "" ? "-" : phone}
      </td>
      <td className="min-w-[120px] px-4 text-sm">
        {address === "" ? "-" : address}
      </td>
      <td className="min-w-[120px] px-4 text-center text-sm">
        {email === "" ? "-" : email}
      </td>
      <td className="min-w-[120px] px-4 text-center text-sm">
        <p
          className={`${is_verified ? "bg-teal-100 text-teal-600" : "bg-red-100 text-red-600"} rounded-lg py-1 font-semibold`}
        >
          {is_verified ? "Verified" : "Unverified"}
        </p>
      </td>
      <td className="min-w-[120px] px-4 text-center text-sm">{created_at}</td>
      <td className="min-w-[150px] px-4 text-center text-sm">
        <div className="grid grid-cols-3 place-items-center gap-4">
          <div className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#D000001A] p-1 hover:scale-[1.05] active:scale-[1]">
            <img src={View} alt="icon" className="scale-[1.5]" />
          </div>
          <div
            onClick={() => {
              dispatch(modalAction.setIdEditUser(email));
              dispatch(modalAction.toggleEditUser());
            }}
            className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#FF89061A] p-1 hover:scale-[1.05] active:scale-[1]"
          >
            <img src={Edit} alt="icon" className="scale-[1.5]" />
          </div>
          <div className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#D000001A] p-1 hover:scale-[1.05] active:scale-[1]">
            <img src={Trash} alt="icon" />
          </div>
        </div>
      </td>
    </tr>
  );
}
