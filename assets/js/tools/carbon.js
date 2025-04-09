// SCRIPT BY ARDA GANZ
// WARNING JIKA KETAHUAN MENGUBAH SCRIPT TANPA IZIN 
// SIAP-SIAP ANDA DIKENAKAN SANKSI YANG BERLAKU 

let imageUrl = "";

function generateImage() {
    const input1 = document.getElementById('input1').value.trim();
    const input2 = document.getElementById('input2').value.trim();
    const resultImage = document.getElementById('resultImage');
    const downloadContainer = document.getElementById('downloadContainer');
    const loading = document.getElementById('loading');

    if (!input1 || !input2) {
        alert("Masukkan kedua input terlebih dahulu!");
        return;
    }

    // Tampilkan loading
    loading.style.display = "block";

    // Membentuk query API sesuai input
    const query = `import ${input1} from '${input2}'`;
    imageUrl = `https://api.agungny.my.id/api/carbon?q=${encodeURIComponent(query)}`;

    console.log("Generated Image URL:", imageUrl); // Debugging

    // Menampilkan gambar baru
    resultImage.style.display = "none"; // Sembunyikan dulu agar tidak ada flicker
    resultImage.src = imageUrl;

    resultImage.onerror = function () {
        alert("Gagal memuat gambar! API mungkin tidak tersedia atau CORS diblokir.");
        console.error("Gambar gagal dimuat dari URL:", imageUrl);
        resultImage.style.display = "none";
        downloadContainer.innerHTML = ""; // Hapus tombol jika gambar gagal
        loading.style.display = "none"; // Sembunyikan loading
    };

    resultImage.onload = function () {
        resultImage.style.display = "block";
        loading.style.display = "none"; // Sembunyikan loading setelah gambar muncul

        // Menampilkan tombol download dengan hitungan mundur
        downloadContainer.innerHTML = `
            <div class="text-center mt-2">
                <!-- Loading saat Download -->
                <div id="loading2" class="text-center text-muted fs-18 mt-2 mb-2" style="display: none;">
                    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                    <span role="status"> Loading hanya <span class="text-danger"><a id="countdownDisplay2"></a></span> detik. Mohon jangan spam button agar tidak terjadi error. Harap tunggu...</span>
                </div>
                <a id="hitungMundur2" class="btn btn-info w-100" onclick="startCountdown()">Download Gambar</a>
            </div>
        `;
    };
}







let countdownInterval; // Variabel global untuk menyimpan interval

function startCountdown() {
    if (!imageUrl) {
        alert("Gambar belum di-generate!");
        return;
    }

    // Hentikan interval sebelumnya jika ada
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    // Langsung mulai proses download terlebih dahulu
    downloadImage();

    let countdownTime = 11; // Atur hitungan mundur dalam detik
    const countdownDisplay = document.getElementById('countdownDisplay2');
    const loading2 = document.getElementById('loading2');
    
    // Tampilkan hitungan mundur setelah download dimulai
    loading2.style.display = "block";
    countdownDisplay.textContent = countdownTime;

    // Mulai hitungan mundur
    countdownInterval = setInterval(() => {
        countdownTime--;
        countdownDisplay.textContent = countdownTime;

        if (countdownTime <= 0) {
            clearInterval(countdownInterval);
            loading2.style.display = "none"; // Sembunyikan teks hitungan mundur setelah selesai
        }
    }, 1000);
}










function downloadImage() {
    if (!imageUrl) {
        alert("Gambar belum di-generate!");
        return;
    }

    console.log("Mencoba mengunduh dari URL:", imageUrl);

    const xhr = new XMLHttpRequest();
    xhr.open("GET", imageUrl, true);
    xhr.responseType = "blob";

    xhr.onload = function () {
        console.log("XHR Status:", xhr.status, xhr.statusText); // Debugging
        if (xhr.status === 200) {
            const blob = xhr.response;
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "Carbon By AG.png"; // Nama file saat di-download
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } else {
            alert("Gagal mengunduh gambar! Periksa API.");
            console.error("Status:", xhr.status, "Text:", xhr.statusText);
        }
    };

    xhr.onerror = function () {
        alert("Gagal mengunduh gambar! Mungkin ada masalah jaringan atau API.");
        console.error("Error saat mengunduh:", xhr.statusText);
    };

    xhr.send();
}
