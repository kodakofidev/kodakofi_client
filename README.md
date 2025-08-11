# ☕ Koda Kofi - Frontend

## 📝 Deskripsi  
Proyek ini merupakan proyek frontend untuk aplikasi coffee shop. Proyek ini dibangun dengan tujuan memberikan pengalaman pengguna yang menarik dalam menjelajah menu, promo dan informasi kedai. Fitur mencakup antarmuka responsive dan desain modern yang memudahkan pengguna untuk memesan secara online. Selain itu, proyek ini juga memiliki fitur khusus untuk admin dimana admin bisa mengelola produk, mengelola pesanan, dan mengelola user.

## ✨ Fitur Aplikasi

### 1. Sisi User
**Authentication**: Pengguna dapat melakukan registrasi dan login sebelum memesan. \
**Edit Profile**: Pengguna dapat melakukan pembaruan profil baik itu nama, alamat, password, dan photo profil. \
**Galery menu interaktif**: Tampilan menu dengan gambar HD dan filter kategori. \
**Pemesanan online**: Pemesanan dapat dilakukan secara online. \
**Riwayat pemesanan**: Pesanan yang pernah terjadi akan disimpan sebagai histori pesanan. \
**Detail pesanan**: Pengguna dapat melihat detail untuk setiap pesanan. 

### 2. Sisi Admin
**Manajemen Menu**: Admin dapat mengelola menu dengan menambahkan produk, mengedit produk, atau menghapus produk. \
**Manajemen Pesanan**: Admin dapat mengelola status pesanan melalui fitur ini. \
**Manajemen Pengguna**: Admin juga dapat mengelola user dengan menambahkan user baru, mengedit user, dan menghapus user.

## 🛠️ Teknologi yang digunakan
- HTML 5
- React Js
- Tailwind CSS
- Redux

## 📦 Prasyarat
Sebelum memulai, pastikan Anda telah menginstal:

Node.js (versi 14 atau lebih baru)

## 🧱 Struktur Proyek

```bash
kodakofi_client/
├── public/             # File statis publik
├── src/                # Kode sumber utama
│   ├── components/     # Komponen UI
│   ├── pages/          # Halaman aplikasi
│   ├── assets/         # Gambar, ikon, dll
│   └── main.jsx        # Entry point React
├── vite.config.js      # Konfigurasi Vite
├── package.json        # Metadata proyek dan dependensi
└── README.md           # Dokumentasi proyek
```

## 📥 Instalasi

1. Kloning repositori:

   ```bash
   git clone https://github.com/kodakofidev/kodakofi_client.git
   cd kodakofi_client
   ```

2. Instal dependensi:

   Menggunakan npm:

   ```bash
   npm install
   ```

3. Menjalankan Proyek

    Untuk menjalankan aplikasi anda dapat menjalankan perintah berikut:

    ```bash
    npm run dev
    ```

    Aplikasi akan berjalan di: [http://localhost:5173](http://localhost:5173)

4. Build untuk Produksi

    Untuk membangun aplikasi:

    ```bash
    npm run build
    ```

    Hasil build akan tersedia di folder `dist/`.

## 📄 Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

## 📬 Kontak

Untuk pertanyaan atau diskusi lebih lanjut, hubungi [kodakofidev](mailto:kodakofi1405@gmail.com).