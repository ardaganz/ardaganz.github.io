// SCRIPT BY ARDA GANZ
// WARNING JIKA KETAHUAN MENGUBAH SCRIPT TANPA IZIN 
// SIAP SIAP ANDA DIKENAKAN SANKSI YANG BERLAKU 


        let imageUrl = "";

        function generateImage() {
            const text = document.getElementById('textInput').value.trim();
            if (!text) {
                alert("Masukkan teks terlebih dahulu!");
                return;
            }

            imageUrl = `https://lanaxsad-js.hf.space/brat?q=${encodeURIComponent(text)}`;
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

                // Buat tombol download secara dinamis
                downloadContainer.innerHTML = `
                <div class="text-center">
                    <button class="btn btn-success w-100" onclick="downloadImage()">
                        Download Gambar
                    </button>
                </div>
                `;
            };

            resultImage.src = imageUrl;
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
                    a.download = "By MFA Team"; // Nama file saat di-download
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
    
    