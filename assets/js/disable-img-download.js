
document.addEventListener("DOMContentLoaded", function() {
    // Cegah klik kanan di semua gambar
    document.addEventListener("contextmenu", function(event) {
        if (event.target.tagName === "IMG") {
            event.preventDefault();
        }
    });

    // Cegah drag & drop gambar
    document.addEventListener("dragstart", function(event) {
        if (event.target.tagName === "IMG") {
            event.preventDefault();
        }
    });

    // Cegah pengguna menekan tombol F12, Ctrl+Shift+I, Ctrl+U, dll.
    document.addEventListener("keydown", function(event) {
        if (
            event.key === "F12" ||
            (event.ctrlKey && event.shiftKey && event.key === "I") || 
            (event.ctrlKey && event.key === "U")
        ) {
            event.preventDefault();
        }
    });
});

