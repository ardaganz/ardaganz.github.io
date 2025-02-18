    // Ambil semua elemen dengan class 'heart-icon'
    const heartIcons = document.querySelectorAll(".heart-icon");

    // Fungsi untuk menyimpan status like ke localStorage berdasarkan data-target
    function saveLikeStatus(target, status) {
        localStorage.setItem(`liked_${target}`, status);
    }

    // Fungsi untuk memuat status like saat halaman dimuat
    document.addEventListener("DOMContentLoaded", function () {
        heartIcons.forEach(icon => {
            const target = icon.getAttribute("data-target");
            const isLiked = localStorage.getItem(`liked_${target}`) === "true";

            if (isLiked) {
                icon.classList.add("liked", "bi-heart-fill");
                icon.classList.remove("bi-heart");
            } else {
                icon.classList.remove("liked", "bi-heart-fill");
                icon.classList.add("bi-heart");
            }
        });
    });

    // Tambahkan event listener ke setiap ikon hati
    heartIcons.forEach(icon => {
        icon.addEventListener("click", function () {
            const target = this.getAttribute("data-target");
            this.classList.toggle("liked");

            const isLiked = this.classList.contains("liked");

            // Toggle ikon antara heart kosong dan heart isi
            if (isLiked) {
                this.classList.remove("bi-heart");
                this.classList.add("bi-heart-fill");
            } else {
                this.classList.remove("bi-heart-fill");
                this.classList.add("bi-heart");
            }

            // Simpan status ke localStorage
            saveLikeStatus(target, isLiked);
        });
    });