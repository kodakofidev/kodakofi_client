import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {modalAction} from '../../../redux/slices/modalsAdmin'
import Close from "../../../assets/iconCheckoutPage/XCircle.svg"
import Coffee from "../../../assets/iconCheckoutPage/Coffee.jpg"
import InputUserAdmin from './InputUserAdmin'
import InputPasswordUserAdmin from './InputPasswordUserAdmin'

export default function EditUserAdmin() {
    const [images, setImages] = useState([]);
    const [previewUrls, setPreviewUrls] = useState([]);
    const {editUser} = useSelector((state) => state.modals);

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
        const full_name = e.target.fullNameEditUser.value;
        const email = e.target.emailEditUser.value;
        const phone = e.target.phoneEditUser.value;
        const passNewUser = e.target.passEdituser.value;
        const address = e.target.addressEdituser.value;
        const typeUser = e.target.elements.TypeEditUser;

        console.log({
            images,
            full_name,
            email,
            phone,
            passNewUser,
            address,
            typeUser,
        })

    }

  return (
    <>
        <form onSubmit={submitHandler} className={`h-full overflow-y-hidden p-8 absolute top-16 left-0 right-0 bottom-0 bg-[#fff]  ${editUser ? "translate-x-0" : "translate-x-[100%]"} transition duration-300  md:w-1/2 md:left-1/2 md:rigth-0 md:p-4 md:shadow-lg`}>
            <div className="flex justify-between items-center">
                <h1 className='text-2xl font-semibold'>Darlene Robertson</h1>
                <img src={Close} alt="close" className="cursor-pointer" onClick={(() => {
                    dispatch(modalAction.toggleEditUser())
                })}/>
            </div>
            <div className='flex flex-col gap-3 pt-4'>
                <h1>Image User</h1>
                <div className="flex flex-wrap gap-4 mt-4">
                    {previewUrls.map((url, index) => (
                    <div key={index} className="w-24 h-24 shadow-lg rounded overflow-hidden">
                        <img src={url} alt={`Preview ${index}`} className="w-full h-full object-cover" />
                    </div>
                    ))}
                </div>
                <div>
                    <label htmlFor='inputImgEditUser' className='py-1 px-2 bg-orange rounded-md cursor-pointer hover:scale-[1.03] active:scale-[1]' >Upload</label>
                    <input type="file" name="inputImgEditUser" id="inputImgEditUser" accept='image/*' hidden onChange={handleImageChange}/>
                </div>
            </div>
            <InputUserAdmin id={"fullNameEditUser"} label={"Full Name"} name={"fullNameEditUser"} placeholder={"Enter Full Name"} type={"input"}/>
            <InputUserAdmin id={"emailEditUser"} label={"Email"} name={"emailEditUser"} placeholder={"Enter Your Email"} type={"input"}/>
            <InputUserAdmin id={"phoneEditUser"} label={"Phone"} name={"phoneEditUser"} placeholder={"Enter Your Number"} type={"input"}/>
            <InputPasswordUserAdmin id={"passEdituser"} label={"Password"} name={"passEdituser"} placeholder={"Enter Your Password"} type={"input"}/>
            <InputUserAdmin id={"addressEdituser"} label={"Address"} name={"addressEdituser"} placeholder={"Enter Your Address"} type={"input"}/>
            <button type="submit" className='mt-4 py-1 px-2 bg-orange rounded-md hover:scale-[1.03] active:scale-[1] cursor-pointer w-full'>Update</button>
        </form>
    </>
  )
}
