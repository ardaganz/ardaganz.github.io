    // Ambil semua elemen dengan class 'heart-icon'
    const heartIcons = document.querySelectorAll(".heart-icon");

    // Fungsi untuk menyimpan status like ke localStorage berdasarkan data-target
    function saveLikeStatus(target, status) {
        localStorage.setItem(`liked_${target}`, status);
    }

    // Fungsi untuk memuat status like saat halaman dimuat
    document.addEventListener("DOMContentLoaded", function () {
        heartIcons.forEach(icon => {
            const target = icon.getAttribute("data-target-heart");
            const isLiked = localStorage.getItem(`liked_${target}`) === "true";

            if (isLiked) {
                icon.classList.add("liked2", "bxs-heart");
                icon.classList.remove("bx-heart");
            } else {
                icon.classList.remove("liked2", "bxs-heart");
                icon.classList.add("bx-heart");
            }
        });
    });

    // Tambahkan event listener ke setiap ikon hati
    heartIcons.forEach(icon => {
        icon.addEventListener("click", function () {
            const target = this.getAttribute("data-target-heart");
            this.classList.toggle("liked2");

            const isLiked = this.classList.contains("liked2");

            // Toggle ikon antara heart kosong dan heart isi
            if (isLiked) {
                this.classList.remove("bx-heart");
                this.classList.add("bxs-heart");
            } else {
                this.classList.remove("bxs-heart");
                this.classList.add("bx-heart");
            }

            // Simpan status ke localStorage
            saveLikeStatus(target, isLiked);
        });
    });