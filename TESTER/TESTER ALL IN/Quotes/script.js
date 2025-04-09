let quotes = [];

// Mengambil data dari file JSON
fetch('quotes.json')
    .then(response => response.json())
    .then(data => quotes = data)
    .catch(error => console.error('Error fetching quotes:', error));

// Menampilkan kutipan secara acak
function getRandomQuote() {
    if (quotes.length > 0) {
        let randomIndex = Math.floor(Math.random() * quotes.length);
        document.getElementById("quote").textContent = quotes[randomIndex].quote;
    } else {
        document.getElementById("quote").textContent = "Tidak ada kutipan tersedia.";
    }
}

// Membacakan kutipan dengan Text-to-Speech
function speakQuote() {
    let text = document.getElementById("quote").textContent;
    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = "id-ID"; // Bahasa Indonesia
    window.speechSynthesis.speak(speech);
}

// Menyalin kutipan ke clipboard
function copyQuote() {
    let text = document.getElementById("quote").textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert("Kutipan berhasil disalin!");
    }).catch(err => {
        console.error("Gagal menyalin:", err);
    });
}
