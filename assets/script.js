// Memuat data dari localStorage
const userName = localStorage.getItem('name');
const userSchool = localStorage.getItem('school');

if (userName && userSchool) {
    document.getElementById('userName').textContent = userName;
    document.getElementById('userSchool').textContent = userSchool;
} else {
    // Jika data tidak ditemukan, arahkan kembali ke halaman login
    window.location.href = 'index.html';
}

// Fungsi untuk logout dan menghapus data dari localStorage
function logout() {
    localStorage.removeItem('name');
    localStorage.removeItem('school');
    window.location.href = 'index.html';
}

function toggleMute() {
    var audio = document.getElementById('audioPlayerbg');
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
    // Fungsi togglePlay yang menerima ID audio dan ID gambar
    // function togglePlay(audioId, imageId) {
    //     var audio = document.getElementById(audioId);
    //     var buttonImage = document.getElementById(imageId);

    //     if (audio.paused) {
    //         audio.play();
    //         buttonImage.src = "assets/icon/pause.png";  // Ganti gambar tombol menjadi pause
    //     } else {
    //         audio.pause();
    //         buttonImage.src = "assets/icon/play.png";   // Ganti gambar tombol menjadi play
    //     }
    // }

    // function toggleMute() {
    //     var audio = document.getElementById('audioPlayerbg');
    //     var image = document.getElementById('volumeImage');
    
    //     // Jika audio sedang mute, unmute dan ubah gambar
    //     if (audio.muted) {
    //         audio.muted = false;
    //         image.src = "assets/icon/high-volume.png";  // Ganti dengan gambar volume tinggi
    //     } else {
    //         // Jika audio sedang unmute, mute dan ubah gambar
    //         audio.muted = true;
    //         image.src = "assets/icon/silence.png";  // Ganti dengan gambar mute
    //     }
    // }
        // Fungsi togglePlay yang menerima ID audio dan ID gambar
        function togglePlay(audioId, imageId) {
            var audio = document.getElementById(audioId);
            var buttonImage = document.getElementById(imageId);
    
            if (audio.paused) {
                audio.play();
                buttonImage.src = "assets/icon/pause.png";  // Ganti gambar tombol menjadi pause
            } else {
                audio.pause();
                buttonImage.src = "assets/icon/play.png";   // Ganti gambar tombol menjadi play
            }
        }
// Fungsi untuk menangani event 'ended' pada audio player
function setAudioEndListener(audioId, imageId) {
    document.getElementById(audioId).addEventListener('ended', function () {
        var buttonImage = document.getElementById(imageId);
        buttonImage.src = "assets/icon/play.png";   // Kembalikan gambar ke play setelah selesai
    });
}

// Menambahkan event listener untuk setiap audio player
setAudioEndListener("audioPlayera", "playPauseImagea");
setAudioEndListener("audioPlayerb", "playPauseImageb");
setAudioEndListener("audioPlayerc", "playPauseImagec");
setAudioEndListener("audioPlayerd", "playPauseImaged");

