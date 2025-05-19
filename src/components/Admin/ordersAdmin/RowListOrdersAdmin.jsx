import React from "react";
import Coffee from "../../../assets/iconHistoryOrders/Coffee.jpg";
import Edit from "../../../assets/iconProductListAdmin/Edit2.svg";
import Trash from "../../../assets/iconProductListAdmin/Trash.png";

export default function RowListOrdersAdmin({id, image, productName, price, description, productSize, method, stock, dispatch, modalAction}) {  

  return (
    <tr key={id}>
      <td className="flex justify-center items-center">
        <div className="flex justify-center items-center h-22 w-full">
          <input type="checkbox" name="selectProduct" id="selectProduct" className="scale-[1.2] cursor-pointer"/>
        </div>
      </td>
      <td>
        <div className="w-20 h-20 bg-amber-200 flex justify-center items-center overflow-hidden rounded-md">
          <img src={Coffee} alt="img" />
        </div>
      </td>
      <td className="min-w-[160px] px-4 text-center text-sm">{productName}</td>
      <td className="px-4 min-w-[120px] text-center text-sm">IDR {price}</td>
      <td className="px-4 min-w-[120px] max-w-[210px] line-clamp-3 text-sm">
        {description}
      </td>
      <td className="px-4 min-w-[120px] text-center text-sm">{productSize}</td>
      <td className="px-4 min-w-[150px] text-center text-sm">{method}</td>
      <td className="px-4 min-w-[120px] text-center text-sm">{stock}</td>
      <td className="px-4 min-w-[120px] text-center text-sm">
        <div className="grid grid-cols-2 place-items-center gap-4">
            <div onClick={() => {
              dispatch(modalAction.toggleModalEditProduct())
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
