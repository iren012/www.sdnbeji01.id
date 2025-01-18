// Mock untuk status login pengguna, admin atau user biasa
const isAdmin = true;  // Ganti dengan false untuk meniru pengguna biasa

// Simulasi data pengumuman
const pengumumanList = [
    { id: 1, judul: 'Libur Semester', isi: 'Libur semester dimulai tanggal 25 Januari 2025.' },
    { id: 2, judul: 'Pendaftaran Siswa Baru', isi: 'Pendaftaran siswa baru dibuka pada 1 Februari 2025.' }
];

// Fungsi untuk menambah pengumuman
function tambahPengumuman(event) {
    event.preventDefault();

    const judul = document.getElementById('judul').value;
    const isi = document.getElementById('isi').value;

    const newPengumuman = {
        id: pengumumanList.length + 1,
        judul: judul,
        isi: isi
    };

    pengumumanList.push(newPengumuman);
    tampilkanPengumuman();
    document.getElementById('form-tambah').reset();
}

// Fungsi untuk menampilkan pengumuman
function tampilkanPengumuman() {
    const listElement = document.getElementById('pengumuman-list');
    listElement.innerHTML = '';

    pengumumanList.forEach(pengumuman => {
        const li = document.createElement('li');
        li.innerHTML = `
            <h3>${pengumuman.judul}</h3>
            <p>${pengumuman.isi}</p>
        `;
        listElement.appendChild(li);
    });
}

// Fungsi untuk menampilkan form tambah pengumuman hanya untuk admin
function kontrolAksesAdmin() {
    if (!isAdmin) {
        // Menyembunyikan form tambah pengumuman jika bukan admin
        document.getElementById('form-tambah-section').style.display = 'none';
    }
}

// Panggil fungsi untuk kontrol akses admin
kontrolAksesAdmin();

// Tampilkan pengumuman saat halaman dimuat
window.onload = tampilkanPengumuman;

