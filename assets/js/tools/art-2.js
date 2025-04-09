// SCRIPT BY ARDA GANZ
// WARNING JIKA KETAHUAN MENGUBAH SCRIPT TANPA IZIN 
// SIAP-SIAP ANDA DIKENAKAN SANKSI YANG BERLAKU 

let imageUrl = "";

function generateImage() {
    const text = document.getElementById('textInput').value.trim();
    if (!text) {
        alert("Masukkan teks terlebih dahulu!");
        return;
    }

    // Tambahkan timestamp agar URL selalu unik dan tidak terkena cache
    const timestamp = new Date().getTime();
    imageUrl = `https://api.agungny.my.id/api/generateart?prompt=${encodeURIComponent(text)}&t=${timestamp}`;
    console.log("Generated Image URL:", imageUrl); // Debugging

    const resultImage = document.getElementById('resultImage');
    const downloadContainer = document.getElementById('downloadContainer');

    resultImage.onerror = function () {
        alert("Gagal memuat gambar! API mungkin tidak tersedia atau CORS diblokir.");
        console.error("Gambar gagal dimuat dari URL:", imageUrl);
        resultImage.style.display = "none";
        downloadContainer.innerHTML = ""; // Hapus tombol jika gambar gagal
    };

    resultImage.onload = function () {
        resultImage.style.display = "block";

        // Buat tombol refresh secara dinamis
        downloadContainer.innerHTML = `
        <div class="text-center mt-3">
            <button class="btn btn-success w-100" onclick="refreshImage()">
                Refresh Gambar
            </button>
        </div>
        `;
    };

    resultImage.src = imageUrl;
}

function refreshImage() {
    if (!imageUrl) {
        alert("Gambar belum di-generate!");
        return;
    }

    // Tambahkan timestamp baru agar browser mengambil gambar baru
    const timestamp = new Date().getTime();
    imageUrl = imageUrl.split('&t=')[0] + `&t=${timestamp}`;

    console.log("Refreshing Image URL:", imageUrl);
    document.getElementById('resultImage').src = imageUrl;
}

// Fungsi download otomatis saat gambar diklik
document.addEventListener("DOMContentLoaded", function () {
    const img = document.getElementById("resultImage");

    img.addEventListener("click", async function () {
        if (!imageUrl) {
            alert("Gambar belum di-generate!");
            return;
        }

        console.log("Mencoba mengunduh dari URL:", imageUrl);

        try {
            let response = await fetch(imageUrl, { mode: 'cors' });
            let blob = await response.blob();
            let blobUrl = URL.createObjectURL(blob);

            let link = document.createElement("a");
            link.href = blobUrl;
            link.download = "Ai_Art_Generator.png"; // Nama file yang diunduh
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            URL.revokeObjectURL(blobUrl);
        } catch (error) {
            alert("Gagal mengunduh gambar. Periksa API atau jaringan.");
            console.error("Error saat mengunduh:", error);
        }
    });

    // Mencegah klik kanan (context menu)
    img.addEventListener("contextmenu", function (event) {
        event.preventDefault();
    });

    // Mencegah tekan lama di HP
    let tekanLama;
    img.addEventListener("touchstart", function (event) {
        tekanLama = setTimeout(() => {
            event.preventDefault();
        }, 500); // Jika tekan lebih dari 500ms, dicegah
    });

    img.addEventListener("touchend", function () {
        clearTimeout(tekanLama);
    });
});
