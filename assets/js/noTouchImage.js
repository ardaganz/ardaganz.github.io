
        document.addEventListener("DOMContentLoaded", function () {
            // Hanya gambar dengan class .notTouchImg yang tidak bisa diklik kanan
            document.querySelectorAll(".notTouchImg").forEach(img => {
                img.addEventListener("contextmenu", function (event) {
                    event.preventDefault();
                    alert("Peringatan dilarang mengunduh gambar ini!");
                });
            });
        });