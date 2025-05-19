import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {modalAction} from '../../../redux/slices/modalsAdmin'
import Close from "../../../assets/iconCheckoutPage/XCircle.svg"
import Coffee from "../../../assets/iconCheckoutPage/Coffee.jpg"
import InputProductAdmin from './InputProductAdmin'

export default function AddProductAdmin() {
    const [images, setImages] = useState([]);
    const [previewUrls, setPreviewUrls] = useState([]);
    const {addProduct} = useSelector((state) => state.modals);

    const dispatch = useDispatch();

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setImages(files);

        const urls = files.map(file => URL.createObjectURL(file));
        setPreviewUrls(urls);
    };

    useEffect(() => {
        return () => {
        previewUrls.forEach(url => URL.revokeObjectURL(url));
        };
    }, [previewUrls]);

    function submitHandler(e) {
        e.preventDefault();
        const productName = e.target.name.value;
        const price = e.target.price.value;
        const category = e.target.category.value;
        const description = e.target.description.value;
        const sizes = Array.from(e.target.elements.size)
        .filter(input => input.checked)
        .map(input => input.value);
        const stock = e.target.stock.value;

        console.log({
            images,
            productName,
            price,
            category,
            description,
            sizes,
            stock,
        })

    }

    console.log(images);
  return (
    <>
        <form onSubmit={submitHandler} className={`z-10 p-8 absolute top-16 left-0 right-0 bottom-0 bg-[#fff]  ${addProduct ? "translate-x-0" : "translate-x-[100%]"} transition duration-300  md:w-1/2 md:left-1/2 md:rigth-0 md:p-4 md:shadow-lg`}>
            <div className="flex justify-between items-center">
                <h1 className='text-2xl font-semibold'>Add Product</h1>
                <img src={Close} alt="close" className="cursor-pointer" onClick={(() => {
                    dispatch(modalAction.toggleModalAddProduct())
                })}/>
            </div>
            <div className='flex flex-col gap-3 pt-4'>
                <h1>Photo Product</h1>
                <div className="flex flex-wrap gap-4 mt-4">
                    {previewUrls.map((url, index) => (
                    <div key={index} className="w-24 h-24 shadow-lg rounded overflow-hidden">
                        <img src={url} alt={`Preview ${index}`} className="w-full h-full object-cover" />
                    </div>
                    ))}
                </div>
                <div>
                    <label htmlFor='inputImg' className='py-1 px-2 bg-orange rounded-md cursor-pointer hover:scale-[1.03] active:scale-[1]' >Upload</label>
                    <input type="file" name="imgProduct" id="inputImg" multiple accept='image/*' hidden onChange={handleImageChange}/>
                </div>
            </div>
            <InputProductAdmin id={"name"} label={"Product Name"} name={"name"} placeholder={"Enter Product Name"} type={"input"}/>
            <InputProductAdmin id={"price"} label={"Price"} name={"price"} placeholder={"Enter Product Price"} type={"input"}/>
            <div className='flex flex-col gap-y-2 pt-4'>
                <label htmlFor="category">Category</label>
                <select name="category" id="category" className='block py-1.5 px-4 rounded-lg border border-gray-400'>
                    <option value="0" disabled selected hidden>Select Category</option>
                    <option value="1">Coffee</option>
                    <option value="2">Non-Coffee</option>
                    <option value="3">Food</option>
                    <option value="4">Dessert</option>
                    <option value="5">Snack</option>
                    <option value="6">Topping</option>
                </select>
            </div>
            <div className='flex gap-2 flex-col pt-4'>
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" placeholder='Enter Product Description' className='border rounded-md border-gray-400 py-1 px-2 focus:outline-orange' cols={3}></textarea>
            </div>
            <div className='flex gap-2 flex-col pt-4'>
                <label htmlFor="size">Product Size</label>
                <div className='flex gap-2 flex-wrap'>
                    <div>
                        <input type="checkbox" name="size" id="regular" className='peer' value={"1"} hidden />
                        <label htmlFor="regular" className='block py-1.5 px-4 rounded-lg border-2 border-gray-300 peer-checked:border-orange cursor-pointer'>R</label>
                    </div>
                    <div>
                        <input type="checkbox" name="size" id="large" className='peer' value={"2"} hidden />
                        <label htmlFor="large" className='block py-1.5 px-4 rounded-lg border-2 border-gray-300 peer-checked:border-orange cursor-pointer'>M</label>
                    </div>
                    <div>
                        <input type="checkbox" name="size" id="extraLarge" className='peer' value={"3"} hidden />
                        <label htmlFor="extraLarge" className='block py-1.5 px-4 rounded-lg border-2 border-gray-300 peer-checked:border-orange cursor-pointer'>L</label>
                    </div>
                    <div>
                        <input type="checkbox" name="size" id="250gr" className='peer' value={"4"} hidden />
                        <label htmlFor="250gr" className='block py-1.5 px-4 rounded-lg border-2 border-gray-300 peer-checked:border-orange cursor-pointer'>Not Drink</label>
                    </div>
                </div>
            </div>
            <InputProductAdmin id={"stock"} label={"Stock"} name={"stock"} placeholder={"Enter Product Stock"} type={"input"}/>
            <button type="submit" className='mt-4 py-1 px-2 bg-orange rounded-md hover:scale-[1.03] active:scale-[1] cursor-pointer w-full'>Submit</button>
        </form>
    </>
  )
}
