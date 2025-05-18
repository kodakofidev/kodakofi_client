import React from "react";
import Coffee from "../../../assets/iconHistoryOrders/Coffee.jpg";
import Edit from "../../../assets/iconProductListAdmin/Edit.svg";
import Trash from "../../../assets/iconProductListAdmin/Trash.png";

export default function RowListProduct() {
  return (
    <tr>
      <td>
        <div className="w-20 h-20 bg-amber-200 flex justify-center items-center overflow-hidden rounded-md">
          <img src={Coffee} alt="img" />
        </div>
      </td>
      <td className="min-w-[160px] px-4 text-center">Caramel Machiato</td>
      <td className="px-4 min-w-[120px] text-center">IDR 40.000</td>
      <td className="px-4 min-w-[120px] max-w-[210px] line-clamp-3">
        Cold brewing is a method of brewing that combines ground coffee and cool
        water and uses time instead of heat to extract the flavor. It is brewed
        in small batches and steeped for as long as 48 hours.
      </td>
      <td className="px-4 min-w-[120px] text-center">R,L,XL,250gr</td>
      <td className="px-4 min-w-[150px] text-center">Deliver, Dine In</td>
      <td className="px-4 min-w-[120px] text-center">200</td>
      <td>
        <div className="grid grid-cols-2">
          {/* <button type="button" className="flex justify-center items-center">
            <img src={Edit} alt="icon" />
          </button>
          <button type="button" className="flex justify-center items-center">
            <img src={Trash} alt="icon" className="scale-[0.08]" />
          </button> */}
        </div>
      </td>
    </tr>
  );
}
