import React, { useEffect, useState } from 'react'
import RowListUsersAdmin from './RowListUsersAdmin';
import PaginationUsersListAdmin from './PaginationUsersListAdmin';

export default function TableUsersAdmin({data}) {

    const [page, setPage] = useState(1);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(5);
    const [more, setMore] = useState(0);
    const [checked, setChecked] = useState(1);

    useEffect(() => {
    setStart(page * 5 - 5), setEnd(page * 5);
    }, [page]);

    const users = [];
    const result = data.slice(start, end);
    users.push(...result);

    let pagination = 0;
    pagination += Math.ceil(data.length / 5);


  return (
    <>
    <section className="overflow-y-hidden pt-12 md:pr-7 lg:pr-3 xl:pr-18">
          <table className="overflow-hidden table-auto min-w-5xl select-none w-full border-separate border-spacing-y-3">
            <thead>
              <tr>
                <th className="px-3 py-2 text-sm w-20">
                    <input type="checkbox" name="selectAll" id="selectAll" className="scale-[1.2] cursor-pointer"/>
                </th>
                <th className="px-3 py-2 text-sm">Image</th>
                <th className="px-3 py-2 text-sm">Full Name</th>
                <th className="px-3 py-2 text-sm">Phone</th>
                <th className="px-3 py-2 text-sm">Address</th>
                <th className="px-3 py-2 text-sm">Email</th>
                <th className="px-3 py-2 text-sm">Action</th>
                {/* <th className="px-3 py-2 text-sm">Stock</th>
                <th className="px-3 py-2 text-sm">Action</th> */}
              </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <RowListUsersAdmin fullName={user.full_name} phone={user.phone} address={user.address} email={user.email} key={index}/>
                ))}
            </tbody>
          </table>
        </section>
        <section className='pt-5'>
            <div className="flex gap-2 flex-col justify-center lg:grid lg:grid-cols-7">
                <div className="lg:col-span-2 text-center">
                    Show {users.length} users of {data.length} user
                </div>
                <div className="flex gap-5 justify-center lg:col-start-5 lg:col-span-3 lg:flex lg:gap-6 lg:justify-center">
                    {(() => {
                        if (data.length > 25) {
                            return <h1 className={`${more === 0 ? "text-gray-400 cursor-not-allowed" : "text-orange  cursor-pointer"} font-semibold`} onClick={() => {
                                if (more > 0) {
                                    setMore(more - 1);
                                    setPage(page - 1);
                                    setChecked(checked - 1);
                                }
                            }}>Prev</h1>
                        }
                    })()}
                    {(() => { 
                        const elPages = []
                        console.log("pagination", pagination)
                        for (let idx = 0; idx < pagination - 1; idx++) {
                            elPages.push(<PaginationUsersListAdmin key={idx + 1 + more} id={idx + 1 + more} setPage={setPage} checked={checked} setChecked={setChecked}/>)
                        }
                        return elPages
                    })()}
                    {(() => {
                        if (data.length > 25) {
                            return <h1 className={`${more < pagination - 6 ? "text-orange cursor-pointer" : "text-gray-400 cursor-not-allowed"} font-semibold`} onClick={() => {
                                if (more < pagination - 6) {
                                    setMore(more + 1)
                                    setPage(page + 1)
                                    setChecked(checked + 1)
                                }
                            }}>Next</h1>
                        }
                    })()}
                </div>
            </div>
        </section>
    </>
  )
}
