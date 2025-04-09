// SCRIPT RATING STARS BY ARDA GANZ



        document.addEventListener("DOMContentLoaded", function () {
            const starsRatingArda = document.querySelectorAll("#rating-container li");
            const ratingText = document.getElementById("rating-text");
            let currentRating = localStorage.getItem("rating") || 0;

            highlightstarsRatingArda(currentRating);
            ratingText.textContent = `${currentRating} Out of 5`;

            starsRatingArda.forEach(star => {
                star.addEventListener("mousemove", function (e) {
                    let rating = parseInt(this.getAttribute("data-value"));
                    if (e.offsetX < this.clientWidth / 2) {
                        rating -= 0.5; // Jika mouse di sebelah kiri, jadikan setengah
                    }
                    highlightstarsRatingArda(rating, true);
                });

                star.addEventListener("click", function (e) {
                    let rating = parseInt(this.getAttribute("data-value"));
                    if (e.offsetX < this.clientWidth / 2) {
                        rating -= 0.5;
                    }
                    currentRating = rating;
                    localStorage.setItem("rating", currentRating);
                    highlightstarsRatingArda(currentRating);
                    ratingText.textContent = `${currentRating} Out of 5`;
                });

                star.addEventListener("mouseleave", function () {
                    highlightstarsRatingArda(currentRating);
                });
            });

            function highlightstarsRatingArda(rating, preview = false) {
                starsRatingArda.forEach((star, i) => {
                    let value = i + 1;
                    let icon = star.querySelector("i");

                    if (value <= rating) {
                        icon.className = "bx bxs-star"; // Bintang penuh
                    } else if (value - 0.5 === rating) {
                        icon.className = "bx bxs-star-half"; // Setengah bintang
                    } else {
                        icon.className = "bx bx-star"; // Bintang kosong
                    }
                });
            }
        });