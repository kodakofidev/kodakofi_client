import React from "react";
import Coffee from "../../../assets/iconHistoryOrders/Coffee.jpg";
import Edit from "../../../assets/iconProductListAdmin/Edit2.svg";
import Trash from "../../../assets/iconProductListAdmin/Trash.png";

import { useDispatch } from "react-redux";

import { modalAction } from "../../../redux/slices/modalsAdmin";

export default function RowListProduct({
  id,
  productName,
  price,
  description,
  productSize,
  method,
  stock,
  category,
  image
}) {  
  const dispatch = useDispatch();
  return (
    <tr className="shadow-sm hover:shadow-md border-r cursor-pointer">
      <td className="px-3 text-center">
        <input type="checkbox" name={`select-${id}`} id={`select-${id}`} className="scale-[1.2] cursor-pointer" />
      </td>
      <td className="px-3 h-16">
        {image ? (
          <img 
            src={image} 
            alt={productName} 
            className="w-16 h-16 object-cover rounded"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/placeholder-image.png"; // Fallback image if the main one fails
            }}
          />
        ) : (
          <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
            <span className="text-gray-500 text-xs">No image</span>
          </div>
        )}
      </td>
      <td className="px-3">
        <div className="flex flex-col">
          <h3 className="font-bold">{productName}</h3>
          <p className="text-gray-400">{category || 'Uncategorized'}</p>
        </div>
      </td>
      <td className="px-3">Rp {Number(price).toLocaleString('id-ID')}</td>
      <td className="px-3">{category || 'Uncategorized'}</td>
      <td className="px-3">{description && description.length > 30 ? description.substring(0, 30) + '...' : description}</td>
      <td className="px-3">
        {productSize && productSize.length > 0
          ? productSize.map((size, idx) => (
              <span key={idx} className="inline-block mr-1 bg-gray-100 px-2 py-1 rounded text-xs">
                {size}
              </span>
            ))
          : <span className="text-gray-400 text-xs">No size data</span>
        }
      </td>
      <td className="px-3">
        {method && method.map((m, idx) => (
          <span key={idx} className="block text-sm">{m}</span>
        ))}
      </td>
      <td className="px-3">{stock}</td>
      <td className="px-3">
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
