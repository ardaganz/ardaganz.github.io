
    document.addEventListener("DOMContentLoaded", () => {
        const chatList = document.getElementById("chat-list");

        // Tambahkan animasi mengetik
        const typingIndicator = document.createElement("li");
        typingIndicator.classList.add("clearfix", "typing-indicator");
        typingIndicator.innerHTML = `
            <div class="chat-conversation-text">
                <div class="d-flex">
                    <div class="chat-ctext-wrap justify-content-end">
                        <div class="typing">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        chatList.appendChild(typingIndicator);

        // Simulasi delay mengetik
        setTimeout(() => {
            // Hapus animasi mengetik
            typingIndicator.remove();

            // Tambahkan pesan bot muncul satu per satu
            const newMessage = document.createElement("li");
            newMessage.classList.add("clearfix");
            newMessage.innerHTML = `
                <div class="chat-conversation-text">
                    <div class="d-flex">
                        <div class="chat-ctext-wrap justify-content-end">
                            <p style="animation-delay: 0s;">Halo! &#x1F44B;</p>
                            <p style="animation-delay: 0.5s;">Selamat datang di chat kami.</p>
                            <p style="animation-delay: 1s;">Apa yang bisa saya bantu hari ini? &#x1F60A;</p>
                        </div>
                    </div>
                    <p class="text-muted fs-12 mb-0 mt-1 ms-3">${new Date().toLocaleTimeString()}</p>
                </div>
            `;
            chatList.appendChild(newMessage);
        }, 1500); // Animasi mengetik selama 1,5 detik
    });
