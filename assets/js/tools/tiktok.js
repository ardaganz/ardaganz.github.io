// SCRIPT BY ARDA GANZ
// WARNING JIKA KETAHUAN MENGUBAH SCRIPT TANPA IZIN 
// SIAP SIAP ANDA DIKENAKAN SANKSI YANG BERLAKU 


        function fetchData() {
            const urlInput = document.getElementById("urlInput").value.trim();
            const resultDiv = document.getElementById("resultDiv");
            const cardBody = document.querySelector(".card");
            
            
            
			// Cek apakah input kosong
        if (!urlInput) {
            swal("Peringatan!", "Masukkan URL TikTok terlebih dahulu!", {
                icon: "error",
                buttons: {
                    confirm: {
                        text: `OKE KAK \u{1F609}`,
                        className: 'btn btn-soft-danger'
                    }
                }
            });
            return;
        }

        // Cek apakah URL tidak mengandung "https://"
        if (!urlInput.startsWith("https://")) {
            swal("Peringatan!", "URL harus diawali dengan 'https://'", {
                icon: "error",
                buttons: {
                    confirm: {
                        text: "Mengerti",
                        className: 'btn btn-soft-danger'
                    }
                }
            });
            return;
        }
			
            const apiURL = `https://api.sxtream.xyz/downloader/tiktok2?url=${encodeURIComponent(urlInput)}`;
            const proxy = "https://api.allorigins.win/raw?url="; // Proxy untuk bypass CORS

            resultDiv.innerHTML = `<div class="text-center text-info"><span class="spinner-border spinner-border-sm" aria-hidden="true"></span><span role="status"> Loading...</span></div>`;

            fetch(proxy + apiURL)
                .then(response => response.text())
                .then(text => {
                    console.log("Response dari API:", text);
                    return JSON.parse(text);
                })
                .then(data => {
                    if (data.result) {
                        const title = data.result?.title || "Video TikTok";
                        const region = data.result?.region || "Tidak diketahui";
                        const cover = data.result?.cover || "";
                        const hdplay = data.result?.hdplay || "";
                        const username = data.result.author?.unique_id || "Username Tidak diketahui";
                        const avatar = data.result.author?.avatar || "Avatar Tidak diketahui";
                        const sound = data.result.music_info?.play || "Sound Tidak diketahui";
                        
                        if (cardBody) {
						    cardBody.style.display = "none";
						}

                        
                        resultDiv.innerHTML = `                                      
						 <div class="col-xl-3 col-lg-4">
						 	<div class="card">
						        <div class="text-center p-4">
						            <div class="img-tiktok position-absolute top-0 start-0 w-100 h-100" 
						                 style="background: url('${cover}') no-repeat center center/cover;">
						            </div>
						            <div class="position-relative p-4">
						                <img src="${avatar}" alt="Profile" class="avatar-xl rounded-circle border border-white">
						                <h5 class="text-white mt-2">${username}</h5>
						                <p class="text-white">${title}</p>
						                <button class="btn btn-info w-100 mb-2" onclick="downloadMedia('${hdplay}', 'video')">Tanpa tanda air <span class="badge badge-success">HD</span></button>
						                <button class="btn btn-info w-100 mb-2" onclick="downloadMedia('${sound}', 'audio')">Download MP3</button>
						                
						            </div>
						        </div>
						    </div>
						 </div>
                        `;
                    } else {
                        console.error("Error dari API:", data);
                        resultDiv.innerHTML = `<div class="text-center text-info"><p class="text-danger">Error dari API: ${data.msg || "Gagal mengambil data."}</p></div>`;
                    }
                })
                .catch(error => {
                    console.error("Fetch error:", error);
                    resultDiv.innerHTML = `<div class="text-center text-info"><p class="text-danger">Terjadi kesalahan: ${error.message}</p></div>`;
                });
        }

        function downloadMedia(videoUrl, type) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", videoUrl, true);
    xhr.responseType = "blob";

    xhr.onload = function () {
        if (xhr.status === 200) {
            const blob = xhr.response;
            let a = document.createElement("a");
            let url = window.URL.createObjectURL(blob);

            if (type === "video") {
                a.href = url;
                a.download = "tiktok_video.mp4"; // Nama file video
            } else if (type === "audio") {
                const audioBlob = convertToMp3(blob); // Simulasi konversi MP3
                url = window.URL.createObjectURL(audioBlob);
                a.href = url;
                a.download = "audio.mp3"; // Nama file audio
            }

            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } else {
            console.error("Download error:", xhr.statusText);
            alert("Gagal mengunduh file!");
        }
    };

    xhr.onerror = function () {
        console.error("Download error:", xhr.statusText);
        alert("Gagal mengunduh file!");
    };

    xhr.send();
}

// Fungsi placeholder untuk konversi ke MP3 (Harus dilakukan di server)
function convertToMp3(videoBlob) {
    // Konversi MP3 asli hanya bisa dilakukan dengan WebAssembly atau di server
    return videoBlob; // Sementara, tetap dalam format asli
}

// Cara penggunaan:
// Untuk download video
// downloadMedia("URL_VIDEO", "video");

// Untuk download audio (MP3)
// downloadMedia("URL_VIDEO", "audio");



    