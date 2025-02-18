// Data chat untuk setiap kontak
const chatData = {
    Ferdi: {
        name: "Ferdi",
        avatar: "assets/img/ferdi.jpg",
        whatsapp: "6287752825741",
        status: "offline",
        subInfo: "Terakhir Dilihat 14.00",
        messages: [
            { type: "in", content: "Hello, Arda", time: "12.35" },
            { type: "out", content: "Hai bang", time: "12.46" },
            { type: "in", content: "Da benerin web gw dong", time: "13.00" },
            { type: "out", content: "benerin gimana bang", time: "13.10" },
            { type: "in", content: "Gw mau buat tampilan baru di dashboard, lu bisa edit agar icon berkedip ga?", time: "13.15" },
            { type: "out", content: "Bisa aja si bang, menurut gw mending lu ganti template webnya bang. Soalnya waktu Sidebar di scroll agak lag dan lambat.", time: "13.18" }
        ],
    },
    Lana: {
        name: "Lana",
        avatar: "assets/img/lana.jpg",
        whatsapp: "6281775445373",
        status: "offline",
        subInfo: "Offline",
        messages: [
            { type: "in", content: "Hello, Arda", time: "12.35" },
            { type: "out", content: "Hello, Siapa ini?", time: "12.46" },
            { type: "in", content: "Masih ingat aku tak?", time: "13.00" },
            { type: "out", content: "Lana Bot, By lanabot, &copy; LanaBot", time: "13.10" },
            { type: "in", content: "Asu!", time: "13.15" },
        ],
    },
    Hadi: {
        name: "Hadi",
        avatar: "assets/img/hadi.jpg",
        whatsapp: "628990911211",
        status: "offline",
        subInfo: "Offline",
        messages: [
            { type: "out", content: "Hallo bang Hadi", time: "12.00" },
            { type: "in", content: "Hai, Dengan siapa?", time: "12.03" },
            { type: "out", content: "Arda Bang, Yang Inspect Rest Apimu dulu", time: "12.04" },
            { type: "in", content: "Ouh kamu Arda", time: "12.04" },
            { type: "out", content: "iya bang, Sehat kan bg?", time: "12.05" },
            { type: "in", content: "Alhamdulillah Sehat bang, kamu sndiri gimana?", time: "12.05" },
            { type: "out", content: "Sehat juga bang", time: "" },
            { type: "out", content: "Bang bisa bantu aku buat project chat GPT?", time: "12.06" },
            { type: "in", content: "lah bantu gimana bang, saya belum terlalu ngerti AI LLM", time: "12.13" },
        ],
    },
    Dittaz: {
        name: "Hadi",
        avatar: "assets/img/dittaz.jpg",
        whatsapp: "6285156137901",
        status: "offline",
        subInfo: "Offline",
        messages: [
            { type: "out", content: "Halo bang", time: "20.00" },
            { type: "in", content: "Haloo", time: "20.00" },
            { type: "out", content: "Apa kabar bang", time: "" },
            { type: "in", content: "Kabar baik", time: "" },
            { type: "in", content: "Kunaon", time: "20.01" },
            { type: "out", content: "Emang masih kenal saya bang?", time: "20.03" },
            { type: "in", content: "Engga", time: "" },
            { type: "in", content: "Awoakwok", time: "" },
            { type: "out", content: "Njir masa ga kenal Parrah si", time: "20.04" },
            { type: "in", content: "Kenal wkwk", time: "20.04" }
        ],
    },
    MFATeam: {
        name: "MFA Team",
        avatar: "assets/img/mfa-team.jpg",
        whatsapp: "6283143831566",
        status: "online",
        subInfo: "Online",
        messages: [
            { type: "in", content: "Hello!", time: "" },
            { type: "in", content: "Ada yang bisa saya bantu?", time: "12.35" }
        ],
    },
};

// Fungsi untuk mengganti isi obrolan
function loadChat(chatId) {
    const chat = chatData[chatId];
    if (!chat) return;

    // Update nama, avatar, dan status di header menggunakan ID
    document.getElementById("header-name").textContent = chat.name;
    document.getElementById("header-avatar").src = chat.avatar;

    // Update status
    const statusElement = document.getElementById("header-status");
    statusElement.className = `avatar avatar-${chat.status}`;
    document.getElementById("header-subInfo").textContent = chat.subInfo;

    // Update isi percakapan
    const chatBody = document.querySelector(".conversations-content");
    chatBody.innerHTML = ""; // Hapus isi sebelumnya

    chat.messages.forEach((message) => {
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

    // Simpan chat aktif ke elemen data
    document.body.setAttribute("data-active-chat", chatId);
}

// Fungsi untuk mengirim pesan ke WhatsApp
function sendMessage() {
    const inputElement = document.getElementById("message-input");
    const message = inputElement.value.trim();

    if (!message) {
        alert("Pesan tidak boleh kosong!");
        return;
    }

    const activeChatId = document.body.getAttribute("data-active-chat");
    if (!activeChatId) {
        alert("Pilih kontak terlebih dahulu!");
        return;
    }

    const whatsappNumber = chatData[activeChatId]?.whatsapp;
    if (!whatsappNumber) {
        alert("Nomor WhatsApp tidak ditemukan!");
        return;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappLink, "_blank");
}

// Event listener untuk setiap kontak di sidebar
document.querySelectorAll(".chat-contacts .list-group-item").forEach((item) => {
    item.addEventListener("click", function (event) {
        event.preventDefault();
        const chatId = this.getAttribute("data-id");
        loadChat(chatId);
    });
});

// Inisialisasi pertama kali
loadChat("MFATeam");
