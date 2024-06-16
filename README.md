# ReactJS Toko Grosir Murah

Ini adalah proyek Toko Sembako yang dibuat dengan React, di mana terdapat fitur Todo List beserta beberapa fungsi tambahan seperti menampilkan jumlah total Task, jumlah tugas yang dihapus/selesai/dibatalkan, dan alert saat aplikasi dibuka dan ditutup.

## Cara Menggunakan

1. Clone repositori ini ke direktori lokal Anda:

```bash
git clone https://github.com/username/toko-sembako.git

Masuk ke direktori projek:

bashCopycd projectseven-app

Instal dependensi projek:

bashCopynpm install

Jalankan aplikasi dalam mode pengembangan:

bashCopynpm start

Aplikasi akan terbuka di http://localhost:3173 di browser Anda.

Fitur

Halaman utama yang menampilkan daftar barang yang dijual di Toko Grosir Murah
Todo List dengan kemampuan menambah, menyelesaikan, dan menghapus tugas yang terkait dengan pekerjaan sehari-hari di Toko Sembako.
Menampilkan jumlah total Task yang ada di dalam Todo List.
Menampilkan jumlah total tugas yang dihapus/selesai/dibatalkan.
Menggunakan useEffect untuk menampilkan alert "Selamat Datang" saat aplikasi dibuka dan alert "Sampai Jumpa" ketika aplikasi ditutup.

Penggunaan React Hook
Dalam proyek ini, digunakan beberapa React Hook, yaitu:

useState: Digunakan untuk menyimpan state dalam komponen fungsional. Dalam kasus ini, useState digunakan untuk menyimpan daftar tugas (tasks), jumlah total tugas (totalTasks), dan jumlah tugas yang dihapus/selesai/dibatalkan (completedTasks).
useEffect: Digunakan untuk menjalankan efek samping (side effect) dalam komponen fungsional. Dalam kasus ini, useEffect digunakan untuk menampilkan alert "Selamat Datang" saat aplikasi dibuka dan alert "Sampai Jumpa" ketika aplikasi ditutup.

Struktur Projek

src/App.jsx: Komponen utama yang merender komponen Home dan TodoList, difile ini juga menampilkan Komponen yang menampilkan halaman utama dan daftar barang yang dijual di Toko Sembako.
src/components/TokoBaku/TodoList.jsx: Komponen yang menampilkan Todo List beserta fungsi-fungsi terkait seperti menambah, menyelesaikan, dan menghapus tugas, serta menampilkan jumlah total Task dan jumlah tugas yang dihapus/selesai/dibatalkan.
src/components/TokoBaku/App.css: File CSS yang berisi gaya untuk tampilan aplikasi.
