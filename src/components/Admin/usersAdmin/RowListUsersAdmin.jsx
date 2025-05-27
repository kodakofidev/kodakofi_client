import React from "react";
import Photo from "../../../assets/iconProductListAdmin/Photo.png";
import Edit from "../../../assets/iconProductListAdmin/Edit2.svg";
import Trash from "../../../assets/iconProductListAdmin/Trash.png";
import View from "../../../assets/iconProductListAdmin/ViewList.svg";
import {useDispatch} from 'react-redux'
import {modalAction} from '../../../redux/slices/modalsAdmin'

export default function RowListUsersAdmin({image, fullName, phone, address, email}) {  
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
            <img src={Photo} alt="img" />
          </div>
        </div>
      </td>
      <td className="min-w-[160px] px-4 text-center text-sm">{fullName}</td>
      <td className="px-4 min-w-[120px] text-center text-sm">{phone}</td>
      <td className="px-4 min-w-[120px] text-sm">{address}</td>
      <td className="px-4 min-w-[120px] text-center text-sm">{email}</td>
      <td className="px-4 min-w-[150px] text-center text-sm">
        <div className="grid grid-cols-3 place-items-center gap-4">
            <div onClick={() => {
              dispatch(modalAction.toggleEditUser())
            }} className="w-10 h-10 bg-[#FF89061A] overflow-hidden rounded-full flex justify-center items-center p-1 cursor-pointer hover:scale-[1.05] active:scale-[1]">
                <img src={View} alt="icon" className="scale-[1.5]"/>
            </div>
            <div className="w-10 h-10 bg-[#D000001A] overflow-hidden rounded-full flex justify-center items-center p-1 cursor-pointer hover:scale-[1.05] active:scale-[1]">
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
