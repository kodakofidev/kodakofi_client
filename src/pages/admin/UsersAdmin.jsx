import React, { useEffect, useState } from 'react'
import HeadUsersList from '../../components/Admin/usersAdmin/HeadUsersList'
import TableUsersAdmin from '../../components/Admin/usersAdmin/TableUsersAdmin';
import { useSelector, useDispatch } from "react-redux";
import {modalAction} from '../../redux/slices/modalsAdmin'
import constant from "../../configs/constant"

export default function UsersAdmin() {
    const dispatch = useDispatch();
    const {addUser, editUser} = useSelector((state) => state.modals);
    const token = useSelector((state) => state.auth.user.token);
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch(`${constant.apiUrl}/admin/users?search=${search}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            }
        }).then((res) => {
            if (!res.ok) {
                throw new Error("failed fetch data");
            }
            return res.json();
        }).then((res) => {
            setUsers(res.data);
        }).catch((err) => {
            console.log("ERROR : ", err);
        })
    }, [search])

  return (
    <>
        <section className="outline-8 outline-[#fff] overscroll-none">
            <HeadUsersList setSearch={setSearch}/>
            <TableUsersAdmin data={users}/>
            <div 
                className={`fixed top-0 bottom-0 left-0 right-[49.75%] z-10 bg-black opacity-70 transition duration-300 ${addUser || editUser ? "translate-x-0" : "translate-x-[200%]"}`} onClick={() => (
                dispatch(modalAction.closeAllModal())
                )}>
            </div>
        </section>
    </>
  )
}
