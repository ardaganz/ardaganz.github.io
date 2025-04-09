document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".grid_sorting_button");
    const products = document.querySelectorAll(".product");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");

            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            products.forEach(product => {
                const categories = product.getAttribute("data-category").split(" ");

                if (filter === "all" || categories.includes(filter)) {
                    product.style.display = "block";
                    setTimeout(() => {
                        product.classList.add("show");
                    }, 50);
                } else {
                    product.classList.remove("show");
                    setTimeout(() => {
                        product.style.display = "none";
                    }, 300);
                }
            });
        });
    });

    // Biar default saat load langsung tampil semua
    products.forEach(product => {
        product.style.display = "block";
        setTimeout(() => {
            product.classList.add("show");
        }, 50);
    });
});
