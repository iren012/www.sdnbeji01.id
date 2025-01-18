// Mock untuk status login pengguna, admin atau user biasa
const isAdmin = true;  // Ganti dengan false untuk meniru pengguna biasa

// Simulasi data pengumuman
const pengumumanList = [
    { id: 1, judul: 'Perayaan Hari Pendidikan Nasional', isi: 'Dalam rangka memperingati Hari Pendidikan Nasional yang jatuh pada tanggal 2 Mei 2025, SDN Beji 01 akan mengadakan berbagai kegiatan menarik yang melibatkan siswa dan orang tua. Kami mengundang seluruh warga sekolah untuk berpartisipasi dalam acara yang akan diumumkan lebih lanjut.

.' },

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

