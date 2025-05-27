import React from 'react'
import HeadUsersList from '../../components/Admin/usersAdmin/HeadUsersList'
import TableUsersAdmin from '../../components/Admin/usersAdmin/TableUsersAdmin';
import { useSelector, useDispatch } from "react-redux";
import {modalAction} from '../../redux/slices/modalsAdmin'

export default function UsersAdmin() {
    const dispatch = useDispatch();
    const {addUser, editUser} = useSelector((state) => state.modals);
    const users = [
        {
            full_name: "Salsa",
            phone: "087866543213",
            address: "3517 W. Gray St. Utica, Pennsylvania 57867",
            email: "cikaracak@gmail.com",
        },
        {
            full_name: "Andi Saputra",
            phone: "081234567891",
            address: "123 Main St, Jakarta Selatan, DKI Jakarta 12110",
            email: "andi.saputra@example.com",
        },
        {
            full_name: "Rina Kartika",
            phone: "082123456789",
            address: "456 Jl. Melati, Bandung, Jawa Barat 40235",
            email: "rina.kartika@example.com",
        },
        {
            full_name: "Dedi Pratama",
            phone: "085612345678",
            address: "789 Jl. Kenanga, Surabaya, Jawa Timur 60293",
            email: "dedi.pratama@example.com",
        },
        {
            full_name: "Maya Sari",
            phone: "089912345678",
            address: "321 Jl. Mawar, Medan, Sumatera Utara 20112",
            email: "maya.sari@example.com",
        },
        {
            full_name: "Fajar Nugroho",
            phone: "081112223333",
            address: "654 Jl. Teratai, Semarang, Jawa Tengah 50241",
            email: "fajar.nugroho@example.com",
        },
        {
            full_name: "Lina Marlina",
            phone: "082244556677",
            address: "987 Jl. Dahlia, Makassar, Sulawesi Selatan 90231",
            email: "lina.marlina@example.com",
        },
        {
            full_name: "Rizky Ramadhan",
            phone: "083355667788",
            address: "741 Jl. Anggrek, Yogyakarta 55281",
            email: "rizky.ramadhan@example.com",
        },
        {
            full_name: "Nina Agustina",
            phone: "084466778899",
            address: "852 Jl. Flamboyan, Palembang, Sumatera Selatan 30121",
            email: "nina.agustina@example.com",
        },
        {
            full_name: "Bayu Prakoso",
            phone: "085577889900",
            address: "963 Jl. Cemara, Pontianak, Kalimantan Barat 78121",
            email: "bayu.prakoso@example.com",
        },
        {
            full_name: "Siti Nurhaliza",
            phone: "081345678900",
            address: "147 Jl. Beringin, Banjarmasin, Kalimantan Selatan 70111",
            email: "siti.nurhaliza@example.com",
        },
        {
            full_name: "Agus Hidayat",
            phone: "082145236547",
            address: "159 Jl. Kemuning, Denpasar, Bali 80231",
            email: "agus.hidayat@example.com",
        },
        {
            full_name: "Yuni Lestari",
            phone: "083267348459",
            address: "753 Jl. Kamboja, Manado, Sulawesi Utara 95115",
            email: "yuni.lestari@example.com",
        },
        {
            full_name: "Hendra Wijaya",
            phone: "084278359560",
            address: "951 Jl. Sawo, Padang, Sumatera Barat 25122",
            email: "hendra.wijaya@example.com",
        },
        {
            full_name: "Intan Permata",
            phone: "085389460671",
            address: "258 Jl. Jambu, Banda Aceh, Aceh 23111",
            email: "intan.permata@example.com",
        },
        {
            full_name: "Bambang Sutrisno",
            phone: "086490571782",
            address: "369 Jl. Durian, Pekanbaru, Riau 28121",
            email: "bambang.sutrisno@example.com",
        },
        {
            full_name: "Tiara Dewi",
            phone: "087601682893",
            address: "147 Jl. Salak, Ternate, Maluku Utara 97721",
            email: "tiara.dewi@example.com",
        },
        {
            full_name: "Eka Putri",
            phone: "088712793904",
            address: "258 Jl. Belimbing, Jayapura, Papua 99111",
            email: "eka.putri@example.com",
        },
        {
            full_name: "Dian Puspita",
            phone: "089823804015",
            address: "369 Jl. Mangga, Serang, Banten 42111",
            email: "dian.puspita@example.com",
        },
        {
            full_name: "Yoga Saputro",
            phone: "080934915126",
            address: "471 Jl. Pisang, Kendari, Sulawesi Tenggara 93121",
            email: "yoga.saputro@example.com",
        },
        {
            full_name: "Citra Ayu",
            phone: "081045126237",
            address: "582 Jl. Nangka, Gorontalo 96115",
            email: "citra.ayu@example.com",
        },
        {
            full_name: "Galih Pramana",
            phone: "082156237348",
            address: "693 Jl. Alpukat, Ambon, Maluku 97121",
            email: "galih.pramana@example.com",
        },
        {
            full_name: "Putri Amelia",
            phone: "083267348459",
            address: "147 Jl. Rambutan, Mataram, NTB 83121",
            email: "putri.amelia@example.com",
        },
        {
            full_name: "Reza Fahlevi",
            phone: "084378459560",
            address: "258 Jl. Apel, Kupang, NTT 85121",
            email: "reza.fahlevi@example.com",
        },
        {
            full_name: "Mega Oktaviani",
            phone: "085489560671",
            address: "369 Jl. Sirsak, Palu, Sulawesi Tengah 94121",
            email: "mega.oktaviani@example.com",
        },
        {
            full_name: "Anton Supriyadi",
            phone: "086590671782",
            address: "471 Jl. Matoa, Jambi 36121",
            email: "anton.supriyadi@example.com",
        },
        {
            full_name: "Nur Aini",
            phone: "087601782893",
            address: "582 Jl. Kedondong, Pangkal Pinang, Babel 33121",
            email: "nur.aini@example.com",
        },
        {
            full_name: "Rudi Hartono",
            phone: "088712893904",
            address: "693 Jl. Pepaya, Tanjungpinang, Kepri 29121",
            email: "rudi.hartono@example.com",
        },
        {
            full_name: "Ayu Lestari",
            phone: "089823904015",
            address: "159 Jl. Jati, Cirebon, Jawa Barat 45121",
            email: "ayu.lestari@example.com",
        },
        {
            full_name: "Zaki Maulana",
            phone: "080934015126",
            address: "753 Jl. Pinus, Bogor, Jawa Barat 16111",
            email: "zaki.maulana@example.com",
        },
        {
            full_name: "Rosa Fitriani",
            phone: "081045126237",
            address: "951 Jl. Akasia, Bekasi, Jawa Barat 17113",
            email: "rosa.fitriani@example.com",
        },
        {
            full_name: "Fikri Nugraha",
            phone: "082156237348",
            address: "321 Jl. Mahoni, Depok, Jawa Barat 16412",
            email: "fikri.nugraha@example.com",
        }
        ];

  return (
    <>
        <section className="outline-8 outline-[#fff] overscroll-none">
            <HeadUsersList />
            <TableUsersAdmin data={users}/>
            <div 
                className={`fixed top-0 bottom-0 left-0 right-[50.5%] z-10 bg-black opacity-70 transition duration-300 ${addUser || editUser ? "translate-x-0" : "translate-x-[200%]"}`} onClick={() => (
                dispatch(modalAction.closeAllModal())
                )}>
            </div>
        </section>
    </>
  )
}
