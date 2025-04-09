// Sidebar
    fetch('settings/sidebar.html')
        .then(response => response.text())
        .then(data => document.getElementById('sidebarArda').innerHTML = data)
        .catch(error => console.error('Error loading sidebar:', error));
        



// Navbar
    fetch("settings/navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbarArda").innerHTML = data;

            // Pastikan elemen #copyright sudah ada sebelum mengubah isinya
            let copyrightElement = document.getElementById("copyright2");
            if (copyrightElement) {
                copyrightElement.innerText = "Arda Ganz";
            } else {
                console.error("Element #copyright tidak ditemukan.");
            }
        })
        .catch(error => console.error("Error loading sidebar:", error));

