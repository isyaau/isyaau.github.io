// Fungsi untuk memuat data dari localStorage jika ada
window.onload = function() {
    const storedName = localStorage.getItem('name');
    const storedSchool = localStorage.getItem('school');

    // Jika data sudah ada, arahkan pengguna langsung ke dashboard
    if (storedName && storedSchool) {
        window.location.href = 'dashboard.html';
    }
};

// Menangani form login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const school = document.getElementById('school').value;

    if (name && school) {
        // Simpan data di localStorage
        localStorage.setItem('name', name);
        localStorage.setItem('school', school);

        // Arahkan pengguna ke halaman dashboard
        window.location.href = 'dashboard.html';
    } else {
        // Tampilkan pesan error jika ada input yang kosong
        document.getElementById('error-message').classList.remove('hidden');
    }
});

function toggleMute() {
    var audio = document.getElementById('audioPlayer');
    var image = document.getElementById('volumeImage');

    // Jika audio sedang mute, unmute dan ubah gambar
    if (audio.muted) {
        audio.muted = false;
        image.src = "assets/icon/high-volume.png";  // Ganti dengan gambar volume tinggi
    } else {
        // Jika audio sedang unmute, mute dan ubah gambar
        audio.muted = true;
        image.src = "assets/icon/silence.png";  // Ganti dengan gambar mute
    }
}