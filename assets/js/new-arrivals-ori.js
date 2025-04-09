
    document.addEventListener("DOMContentLoaded", function () {
        const buttons = document.querySelectorAll(".grid_sorting_button");
        const products = document.querySelectorAll(".product");

        buttons.forEach(button => {
            button.addEventListener("click", () => {
                const filter = button.getAttribute("data-filter");

                buttons.forEach(btn => btn.classList.remove("active"));
                button.classList.add("active");

                products.forEach(product => {
                    const categories = product.getAttribute("data-category").split(" "); // Pisahkan kategori

                    if (filter === "all" || categories.includes(filter)) {
                        product.style.display = "block";
                    } else {
                        product.style.display = "none";
                    }
                });
            });
        });
    });