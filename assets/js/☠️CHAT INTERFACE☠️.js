// Data chat untuk setiap kontak
const chatData = {
	Ferdi: {
        name: "Ferdi",
        avatar: "assets/img/ferdi.jpg",
        whatsapp: "6283143831566",
        messages: [
            { type: "in", content: "Hello, Arda", time: "12.35" },
            { type: "out", content: "Hello, Siapa ini?", time: "12.46" },
            { type: "in", content: "Masih ingat aku tak?", time: "13.00" },
            { type: "out", content: "Lana Bot, By lanabot, © LanaBot", time: "13.10" },
            { type: "in", content: "Asu!", time: "13.15" }
        ]
    },
    Lana: {
        name: "Lana",
        avatar: "assets/img/lana.jpg",
        whatsapp: "6283143831566",
        messages: [
            { type: "in", content: "Hello, Arda", time: "12.35" },
            { type: "out", content: "Hello, Siapa ini?", time: "12.46" },
            { type: "in", content: "Masih ingat aku tak?", time: "13.00" },
            { type: "out", content: "Lana Bot, By lanabot, © LanaBot", time: "13.10" },
            { type: "in", content: "Asu!", time: "13.15" }
        ]
    },
    Hadi: {
        name: "Hadi",
        avatar: "assets/img/hadi.jpg",
        whatsapp: "6283143831566",
        messages: [
            { type: "out", content: "Hallo bang Hadi", time: "12.00" },
            { type: "in", content: "Hai, Dengan siapa?", time: "12.03" },
            { type: "out", content: "Arda Bang, Yang Inspect Rest Apimu dulu", time: " " },
            { type: "in", content: "Ouh kamu Arda", time: " " },
            { type: "out", content: "iya bang, Sehat kan bg?", time: "12.05" },
            { type: "in", content: "Alhamdulillah Sehat bang, kamu sndiri gimana?", time: "12.06" },
            { type: "out", content: "Sehat juga bang", time: " " },
            { type: "out", content: "Hp lama ku ilang bang bulan 9 kemarin kena begal", time: " " },
            { type: "out", content: "Cape nyariin no kalian semua", time: "12.07" }
        ]
    },
    MFATeam: {
        name: "MFA Team",
        avatar: "assets/img/lana.jpg",
        whatsapp: "6283143831566",
        messages: [
            { type: "in", content: "Hello, Ada yang bisa saya bantu?", time: "12.35" }
        ]
    },
};

// Fungsi untuk mengganti isi obrolan
function loadChat(chatId) {
    const chat = chatData[chatId];
    if (!chat) return;

    // Update nama dan avatar di header
    document.querySelector(".info-user .name").textContent = chat.name;
    document.querySelector(".avatar.avatar-offline img").src = chat.avatar;

    // Update isi percakapan
    const chatBody = document.querySelector(".conversations-content");
    chatBody.innerHTML = ""; // Hapus isi sebelumnya

    chat.messages.forEach(message => {
        const messageHtml = `
            <div class="message-content-wrapper">
                <div class="message message-${message.type}">
                    <div class="message-body">
                        <div class="message-content">
                            <div class="content">${message.content}</div>
                        </div>
                        <div class="date">${message.time}</div>
                    </div>
                </div>
            </div>
        `;
        chatBody.innerHTML += messageHtml;
    });
}

// Send a new message
    function sendMessage() {
    const inputElement = document.getElementById("message-input");
    const message = inputElement.value.trim();

    // Validasi jika pesan kosong
    if (!message) {
        alert("Pesan tidak boleh kosong!");
        return;
    }

    // Nomor WhatsApp dari data aktif (bisa disesuaikan sesuai konteks data Anda)
    const activeChatId = "MFATeam"; // Misalnya data obrolan aktif, ganti sesuai implementasi
    const whatsappNumber = chatData[activeChatId]?.whatsapp;

    // Validasi jika nomor WhatsApp tidak tersedia
    if (!whatsappNumber) {
        alert("Nomor WhatsApp tidak ditemukan!");
        return;
    }

    // Encode pesan untuk menghindari karakter yang tidak valid
    const encodedMessage = encodeURIComponent(message);

    // Redirect ke tautan WhatsApp
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappLink, "_blank");
}



function loadChatHeader(chatId) {
    const chat = chatData[chatId];
    if (!chat) return;

    // Update avatar
    const headerAvatar = document.getElementById("header-avatar");
    headerAvatar.src = chat.avatar;

    // Update name
    const headerName = document.getElementById("header-name");
    headerName.textContent = chat.name;

    // Update status (opsional)
    const headerStatus = document.getElementById("header-status");
    headerStatus.textContent = chat.status || "Online"; // Default ke "Online"
}

// Tambahkan event listener untuk kontak di navbar
// Event listener untuk setiap kontak di sidebar
document.querySelectorAll(".chat-contacts .list-group-item").forEach(item => {
    item.addEventListener("click", function (event) {
        event.preventDefault();
        const chatId = this.getAttribute("data-id");
        loadChatHeader(chatId);
    });
});






// Inisialisasi pertama kali (muat obrolan Lana)
loadChat("MFATeam");