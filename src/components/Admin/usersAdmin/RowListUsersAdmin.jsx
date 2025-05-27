import React from "react";
import Photo from "../../../assets/iconProductListAdmin/Photo.png";
import Edit from "../../../assets/iconProductListAdmin/Edit2.svg";
import Trash from "../../../assets/iconProductListAdmin/Trash.png";
import View from "../../../assets/iconProductListAdmin/ViewList.svg";
import {useDispatch} from 'react-redux'
import {modalAction} from '../../../redux/slices/modalsAdmin'

export default function RowListUsersAdmin({image, fullName, phone, address, email, is_verified, created_at}) {  
  const dispatch = useDispatch();
  return (
    <tr>
      <td className="flex justify-center items-center">
        <div className="flex justify-center items-center h-22 w-full">
          <input type="checkbox" name="selectProduct" id="selectProduct" className="scale-[1.2] cursor-pointer"/>
        </div>
      </td>
      <td className="min-w-[160px] px-4 text-center text-sm">
        <div className="h-full w-full flex justify-center">
          <div className="w-20 h-20 flex justify-center items-center overflow-hidden rounded-md">
            <img src={`http://localhost:8080/${image}`} alt="image" />
          </div>
        </div>
      </td>
      <td className="min-w-[160px] px-4 text-center text-sm">{fullName === "" ? "-" : fullName}</td>
      <td className="px-4 min-w-[120px] text-center text-sm">{phone === "" ? "-" : phone}</td>
      <td className="px-4 min-w-[120px] text-sm">{address === "" ? "-" : address}</td>
      <td className="px-4 min-w-[120px] text-center text-sm">{email === "" ? "-" : email}</td>
      <td className="px-4 min-w-[120px] text-center text-sm">
        <p className={`${is_verified ? "bg-teal-100 text-teal-600" : "bg-red-100 text-red-600"} font-semibold rounded-lg py-1`}>
          {is_verified ? "Verified" : "Unverified"}
        </p>
      </td>
      <td className="px-4 min-w-[120px] text-center text-sm">{created_at}</td>
      <td className="px-4 min-w-[150px] text-center text-sm">
        <div className="grid grid-cols-3 place-items-center gap-4">
            <div className="w-10 h-10 bg-[#D000001A] overflow-hidden rounded-full flex justify-center items-center p-1 cursor-pointer hover:scale-[1.05] active:scale-[1]">
                <img src={View} alt="icon" className="scale-[1.5]"/>
            </div>
            <div onClick={() => {
              dispatch(modalAction.setIdEditUser(email));
              dispatch(modalAction.toggleEditUser());
            }} className="w-10 h-10 bg-[#FF89061A] overflow-hidden rounded-full flex justify-center items-center p-1 cursor-pointer hover:scale-[1.05] active:scale-[1]">
                <img src={Edit} alt="icon" className="scale-[1.5]"/>
            </div>
            <div className="w-10 h-10 bg-[#D000001A] overflow-hidden rounded-full flex justify-center items-center p-1 cursor-pointer hover:scale-[1.05] active:scale-[1]">
                <img src={Trash} alt="icon" />
            </div>
        </div>
      </td>
    </tr>
  );
}
