import React from "react";
import Coffee from "../../../assets/iconHistoryOrders/Coffee.jpg";
import Edit from "../../../assets/iconProductListAdmin/Edit2.svg";
import Trash from "../../../assets/iconProductListAdmin/Trash.png";

import { useDispatch } from "react-redux";

import { modalAction } from "../../../redux/slices/modalsAdmin";

export default function RowListProduct({
  id,
  image,
  productName,
  price,
  description,
  productSize,
  method,
  stock,
}) {
  const dispatch = useDispatch();
  return (
    <tr key={id}>
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
      <td>
        <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-md bg-amber-200">
          <img src={Coffee} alt="img" />
        </div>
      </td>
      <td className="min-w-[160px] px-4 text-center text-sm">{productName}</td>
      <td className="min-w-[120px] px-4 text-center text-sm">IDR {price}</td>
      <td className="line-clamp-3 max-w-[210px] min-w-[120px] px-4 text-sm">
        {description}
      </td>
      <td className="min-w-[120px] px-4 text-center text-sm">{productSize}</td>
      <td className="min-w-[150px] px-4 text-center text-sm">{method}</td>
      <td className="min-w-[120px] px-4 text-center text-sm">{stock}</td>
      <td className="min-w-[120px] px-4 text-center text-sm">
        <div className="grid grid-cols-2 place-items-center gap-4">
          <div
            onClick={() => {
              dispatch(modalAction.toggleModalEditProduct());
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
