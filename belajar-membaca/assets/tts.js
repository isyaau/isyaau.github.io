// =========================================================
// Text-to-Speech Bahasa Indonesia (Web Speech API)
// Digunakan untuk membacakan huruf/objek/kata dengan suara
// yang benar, menggantikan file mp3 yang rusak.
// =========================================================
let ttsVoice = null;
let ttsMuted = false;

const TTS_LANG = 'id-ID';

// Cari suara Bahasa Indonesia (Google/Microsoft/OS)
function ttsPickVoice() {
    const voices = window.speechSynthesis.getVoices();
    ttsVoice = voices.find(v => v.lang && v.lang.toLowerCase().startsWith('id'))
        || voices.find(v => v.lang && v.lang.toLowerCase() === 'id-id')
        || null;
}

if ('speechSynthesis' in window) {
    ttsPickVoice();
    window.speechSynthesis.onvoiceschanged = ttsPickVoice;
}

// Baca teks dengan suara. stop() membatalkan yang sedang berjalan.
function speak(text) {
    if (!('speechSynthesis' in window)) return;
    if (ttsMuted) return;
    window.speechSynthesis.cancel();
    if (!text) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = TTS_LANG;
    utterance.rate = 0.85;
    utterance.pitch = 1.05;
    utterance.volume = 1;
    if (ttsVoice) utterance.voice = ttsVoice;
    window.speechSynthesis.speak(utterance);
}

function stopSpeak() {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
}

// Sinkronkan dengan tombol volume global (assets/icon naming)
function setTtsMuted(muted) {
    ttsMuted = muted;
}