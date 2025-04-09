        async function pasteFromClipboard() {
            try {
                const text = await navigator.clipboard.readText();
                document.getElementById('urlInput').value = text;
            } catch (err) {
                alert("Gagal mengambil teks dari clipboard! Pastikan izin diberikan.");
                console.error(err);
            }
        }