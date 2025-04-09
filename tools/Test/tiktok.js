    
        function fetchData() {
            const urlInput = document.getElementById("urlInput").value.trim();
            const resultDiv = document.getElementById("resultDiv");

            if (!urlInput) {
			    swal("Peringatan!", "Masukkan URL TikTok terlebih dahulu!", {
			        icon: "error",
			        buttons: {
			            confirm: {
							text: `OKE KAK \u{1F609}`,
			                className: 'btn btn-danger'
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
                        
                        resultDiv.innerHTML = `
                                        
 <div class="col-xl-3 col-lg-4">
 	<div class="card">
        <div class="text-center p-4">
            <div class="position-absolute top-0 start-0 w-100 h-100" 
                 style="background: url('${cover}') no-repeat center center/cover; opacity: 0.5;">
            </div>
            <div class="position-relative p-4">
                <img src="${avatar}" alt="Profile" class="avatar-xl rounded-circle border border-white">
                <h5 class="text-white mt-2">${username}</h5>
                <p class="text-warning">${title}</p>
                <button class="btn btn-primary w-100 mb-2" onclick="downloadVideo('${hdplay}')">Tanpa tanda air</button>
                <button class="btn btn-primary w-100 mb-2"><span>&copy;</span> Download with App</button>
                <button class="btn btn-primary w-100 mb-2">
                    <strong>Tanpa tanda air HD</strong> <span class="badge badge-success">AD</span>
                </button>
                <button class="btn btn-primary w-100">Download MP3</button>
            </div>
        </div>
    </div>
 </div>
 
                        `;
                    } else {
                        console.error("Error dari API:", data);
                        resultDiv.innerHTML = `<p class="text-danger">Error dari API: ${data.msg || "Gagal mengambil data."}</p>`;
                    }
                })
                .catch(error => {
                    console.error("Fetch error:", error);
                    resultDiv.innerHTML = `<p class="text-danger">Terjadi kesalahan: ${error.message}</p>`;
                });
        }

        function downloadVideo(videoUrl) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", videoUrl, true);
    xhr.responseType = "blob";

    xhr.onload = function () {
        if (xhr.status === 200) {
            const blob = xhr.response;
            const a = document.createElement("a");
            const url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = "tiktok_video.mp4"; // Nama file saat di-download
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } else {
            console.error("Download error:", xhr.statusText);
            alert("Gagal mengunduh video!");
        }
    };

    xhr.onerror = function () {
        console.error("Download error:", xhr.statusText);
        alert("Gagal mengunduh video!");
    };

    xhr.send();
}
    