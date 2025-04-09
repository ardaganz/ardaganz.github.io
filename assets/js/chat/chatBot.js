
    const chatConversationList = document.querySelector('.chat-conversation-list');
    const chatForm = document.getElementById('chat-form');
    const chatInput = chatForm.querySelector('input[type="text"]');

    // Daftar jawaban otomatis random
    const responses = [
        "Halo! Bagaimana kabarmu?",
        "Itu menarik! Ceritakan lebih lanjut.",
        "Saya tidak yakin, bisa kamu jelaskan lagi?",
        "Wah, itu keren!",
        "Hmmm, aku perlu berpikir tentang itu.",
        "Haha, aku mengerti maksudmu!",
        "Terima kasih telah berbagi!",
        "Apa yang bisa saya bantu hari ini?",
        "Maaf, aku tidak paham. Bisa diulang?",
        "Bagus sekali! Lanjutkan!"
    ];

    // Daftar kata kunci dan balasan khusus
    const keywordResponses = [
    { keyword: "kontol", response: "Ga usah toxic bisa?" },
    { keyword: "kntl", response: "kau lah kntl kau maki pulak aku" },
    { keyword: "anjeng", response: "muncong kau di jaga anjeng" },
    { keyword: "anjing", response: "anjing kau lah anjingnya" },
    { keyword: "ajg", response: "ga usah toxic bisa kau ajg?" },
    { keyword: "pepek", response: "Ga usah toxic bisa kau pepek" },
    { keyword: "ppk", response: "Ga usah toxic lah ppk" },
    { keyword: "memek", response: "Ga usah toxic kau memek ku ban nanti kau dari sini" },
    { keyword: "mmk", response: "Ga usah toxic kau mmk" },
    { keyword: "puki", response: "Ga usah toxic kau puki" },
    { keyword: "ngentod", response: "ngentod sama siapa bang?" },
    { keyword: "ngntd", response: "ngntd sama siapa bang?" },
    { keyword: "titid", response: "Titid mu pasti kecil kan?" },
    
    { keyword: "bos", response: "kenapa dengan Bos saya!" },
    { keyword: "owner", response: "Owner ku Ａｒｄａ亗, ada apa nyariin dia?" },
    { keyword: "gapapa", response: "Oh yaudah deh kalo ga papa kirain penting!" },
    { keyword: "gpp", response: "oh yaudah deh" },
    { keyword: "jodoh", response: "Jodoh ngapain dicari kak, yang namanya jodoh kan nanti datang sndiri hhhh&#x1F923;" },
    { keyword: "arda", response: "Ada apa sebut nama Owner ku kak?" },
    { keyword: "riska", response: "Riska itu mantan terbaiknya Ownerku kak, Arda." },
    { keyword: "nyambung", response: "di sambung sambungin lah hhh&#x1F602;" },
    { keyword: "nyambong", response: "di sambung sambungin lah hhh&#x1F602;" },
    
    { keyword: "pw", response: "pw bah&#x1F62D; pw apa ni? Perawan atau Password. ada ada aja ko bah" },
    { keyword: "password", response: "Maaf, saya tidak bisa memberi password apapun itu" },
    { keyword: "sandi", response: "Maaf, saya tidak bisa memberi sandi apapun itu!" },

    { keyword: "apa", response: "ga papa heheheh" },
    { keyword: "mending", response: "Kalo kaum mendang mending ga usah banyak gaya deh." },
    { keyword: "wa", response: "Saya bot, jadi saya tidak punya nomor WhatsApp." },
    { keyword: "hai", response: "Halo! Ada yang bisa saya bantu?" },
    { keyword: "halo", response: "Halo juga! Apa kabar?" },
    { keyword: "gabut", response: "Kok bisa sampe segabut ini?" },
    { keyword: "assalamualaikum", response: "Waalaikumsalam! Semoga harimu menyenangkan!" },
    { keyword: "selamat pagi", response: "Selamat pagi! Semangat beraktivitas!" },
    { keyword: "selamat siang", response: "Selamat siang! Jangan lupa makan siang ya!" },
    { keyword: "selamat malam", response: "Selamat malam! Istirahat yang cukup ya!" },
    { keyword: "terima kasih", response: "Sama-sama! Senang bisa membantu." },
    { keyword: "makasih", response: "Sama-sama! Ada lagi yang bisa saya bantu?" },
    { keyword: "siapa kamu", response: "Saya adalah bot yang siap membantu kamu!" },
    { keyword: "lagi apa", response: "Saya lagi standby nungguin kamu ngobrol nih!" },
    { keyword: "baper", response: "Santai aja, jangan baper dong!" },
    { keyword: "ngantuk", response: "Kalau ngantuk, jangan lupa istirahat ya." },
    { keyword: "lapar", response: "Yuk makan dulu, jangan sampai kelaparan!" },
    { keyword: "bosan", response: "Kalau bosan, coba cari aktivitas seru deh!" },
    { keyword: "love", response: "Love you too!" },
    { keyword: "hehe", response: "Hehe, lucu juga ya!" },
    { keyword: "hhhh", response: "hhhh, ada yang lucu?" },
    { keyword: "wkwkwk", response: "hahha gelak kali ya!" },
    { keyword: "hmm", response: "Kok jadi mikir keras gitu?" },
    { keyword: "oke", response: "Sip, mantap!" },
    { keyword: "lol", response: "Hahaha, lucu banget!" },
    { keyword: "wkwk", response: "Wkwkwk, ngakak!" },
    { keyword: "anjay", response: "Anjay mabar!" },
    { keyword: "mabar", response: "Yuk mabar, game apa nih?" },
    { keyword: "night", response: "Good night! Sweet dreams!" },
    { keyword: "morning", response: "Good morning! Semangat ya hari ini!" },
    { keyword: "kenapa", response: "Ada apa? Cerita aja!" },
    { keyword: "sedih", response: "Jangan sedih ya, semuanya akan baik-baik saja." },
    { keyword: "senang", response: "Wah, ikut senang juga dengernya!" },
    { keyword: "marah", response: "Tenang dulu, jangan terbawa emosi." },
    { keyword: "sakit", response: "Cepat sembuh ya! Jangan lupa minum obat." },
    { keyword: "happy", response: "Ikut senang dengernya! Semoga selalu happy!" },
    { keyword: "cuaca", response: "Semoga cuacanya cerah ya hari ini!" },
    { keyword: "hujan", response: "Jangan lupa bawa payung kalau keluar rumah!" },
    { keyword: "panas", response: "Wah, jangan lupa minum air yang cukup ya!" },
    { keyword: "dingin", response: "Pakai jaket biar nggak kedinginan!" },
    { keyword: "cewek", response: "Cewek itu makhluk paling misterius, ya?" },
    { keyword: "cowok", response: "Cowok harus kuat, tapi boleh kok nangis." },
    { keyword: "cinta", response: "Cinta itu indah kalau bersama orang yang tepat." },
    { keyword: "galau", response: "Galau itu wajar kok, nanti juga lewat." },
    { keyword: "jomblo", response: "Jomblo itu pilihan, bukan kutukan!" },
    { keyword: "pacar", response: "Wah, bahagia dong punya pacar?" },
    { keyword: "mantan", response: "Mantan itu kenangan, bukan untuk dikenang terus." },
    { keyword: "game", response: "Main game itu seru, tapi jangan lupa waktu!" },
    { keyword: "mobile legend", response: "Ayo mabar ML, rank berapa nih?" },
    { keyword: "free fire", response: "Booyah! Yuk main Free Fire!" },
    { keyword: "pubg", response: "Winner Winner Chicken Dinner!" },
    { keyword: "valorant", response: "Spike planted! Let's go!" },
    { keyword: "minecraft", response: "Let's build something epic!" },
    { keyword: "nonton", response: "Nonton apa nih? Kasih rekomendasi dong!" },
    { keyword: "drakor", response: "Wah, suka drakor juga? Oppa-oppa!" },
    { keyword: "anime", response: "Anime apa favoritmu?" },
    { keyword: "netflix", response: "Netflix and chill?" },
    { keyword: "spotify", response: "Lagi dengerin lagu apa nih?" },
    { keyword: "musik", response: "Musik bisa bikin mood naik!" },
    { keyword: "lagu", response: "Lagu favorit kamu apa?" },
    { keyword: "film", response: "Genre film favoritmu apa?" },
    { keyword: "horor", response: "Berani nonton horor sendirian?" },
    { keyword: "komedi", response: "Butuh hiburan? Komedi paling cocok!" },
    { keyword: "action", response: "Film action emang selalu seru!" },
    { keyword: "romantis", response: "Film romantis bikin baper!" },
    { keyword: "makan", response: "Makan apa hari ini?" },
    { keyword: "minum", response: "Jangan lupa minum air putih ya!" },
    { keyword: "ngopi", response: "Ngopi dulu biar nggak ngantuk!" },
    { keyword: "teh", response: "Teh hangat enak diminum saat santai." },
    { keyword: "nasi goreng", response: "Siapa yang nggak suka nasi goreng?" },
    { keyword: "ayam", response: "Ayam goreng kriuk enak banget!" },
    { keyword: "mie", response: "Mie instan, teman setia anak kos!" },
    { keyword: "pizza", response: "Mau topping apa di pizzanya?" },
    { keyword: "burger", response: "Burger dengan keju meleleh? Yum!" },
    { keyword: "sate", response: "Sate ayam atau sate kambing nih?" },
    { keyword: "bakso", response: "Bakso urat atau bakso telur?" },
    { keyword: "ngantuk", response: "Kalau ngantuk, istirahat sebentar ya." },
    { keyword: "tidur", response: "Selamat tidur! Semoga mimpi indah." },
    { keyword: "bangun", response: "Selamat pagi! Jangan lupa sarapan." },
    { keyword: "sekolah", response: "Semangat sekolahnya! Jangan lupa belajar!" },
    { keyword: "kuliah", response: "Jangan lupa tugas kuliahnya ya!" },
    { keyword: "kerja", response: "Semangat kerja! Jangan lupa istirahat." },
    { keyword: "libur", response: "Asik, waktunya santai!" },
    { keyword: "weekend", response: "Happy weekend! Enjoy your time!" },
    { keyword: "monday", response: "Semangat Senin! Jangan mager ya!" },
    { keyword: "friday", response: "Hore! Hari Jumat akhirnya datang!" },
    { keyword: "sukses", response: "Semoga kamu selalu sukses!" },
    { keyword: "semangat", response: "Tetap semangat! Kamu pasti bisa!" },
    { keyword: "lucu", response: "Hahaha, beneran lucu tuh!" },
    { keyword: "gila", response: "Haha, kamu emang gokil!" },
    { keyword: "wow", response: "Wow banget nih!" },
    { keyword: "serius", response: "Beneran? Serius nih?" },
    { keyword: "bohong", response: "Hmm, jangan bohong ya!" },
    { keyword: "yakin", response: "Kalau yakin, jalanin aja!" },
    { keyword: "takut", response: "Jangan takut, aku di sini kok!" },
    { keyword: "malas", response: "Ayo bangkit! Jangan malas terus." },
    { keyword: "curhat", response: "Aku siap dengerin curhatan kamu!" },
    { keyword: "pusing", response: "Coba istirahat sebentar biar nggak pusing." },
    { keyword: "stress", response: "Santai dulu, tarik napas dalam-dalam." },
    { keyword: "internet", response: "Jaringan aman? Atau lemot nih?" },
    { keyword: "wifi", response: "Wifi-nya kuat nggak?" },
    { keyword: "baterai", response: "Jangan lupa cas HP-mu!" },
    { keyword: "hp", response: "HP-mu merk apa nih?" },
    { keyword: "laptop", response: "Laptop lemot? Coba restart dulu." },
    { keyword: "game over", response: "Coba lagi, jangan menyerah!" },
    { keyword: "nonton bola", response: "Tim favoritmu siapa?" },
    { keyword: "goal", response: "Goooolllll!!!" },
    { keyword: "basket", response: "Slam dunk!" },
    { keyword: "badminton", response: "Smash yang kuat!" },
    { keyword: "olahraga", response: "Yuk olahraga biar sehat!" },
    { keyword: "jalan-jalan", response: "Asik! Kemana nih?" },
    { keyword: "pantai", response: "Pantai itu tempat healing terbaik!" },
    { keyword: "gunung", response: "Mendaki gunung itu seru banget!" },
    { keyword: "healing", response: "Kadang kita butuh waktu sendiri untuk healing." },
    { keyword: "liburan", response: "Liburan kemana nih?" },
    { keyword: "foto", response: "Jangan lupa selfie dulu!" },
    { keyword: "selfie", response: "Cekrek! Cakep banget fotonya!" },
    { keyword: "tiktok", response: "Lagi tren apa di TikTok nih?" },
    { keyword: "instagram", response: "Mau mutualan ig? ayuk!" },
    { keyword: "facebook", response: "Udah update status belum?" },
    { keyword: "twitter", response: "Apa trending hari ini?" },
    { keyword: "youtube", response: "Channel favoritmu apa?" },
    { keyword: "subscribe", response: "Jangan lupa like, comment, dan subscribe!" },
    { keyword: "viral", response: "Wah, berita apaa yang viral kak?" },
    { keyword: "trending", response: "Lihat deh yang trending hari ini!" },
    { keyword: "memes", response: "Siapa sih yang nggak suka memes?" },
    { keyword: "quotes", response: "Hidup itu singkat, nikmati setiap momennya." },
    { keyword: "motivation", response: "Setiap hari adalah kesempatan baru!" },
    { keyword: "random", response: "Haha, random banget!" },
    { keyword: "bye", response: "Dadah! Sampai jumpa lagi!" },
    { keyword: "see you", response: "See you soon!" },
    { keyword: "goodbye", response: "Goodbye! Jaga diri baik-baik!" }
];


    // Fungsi untuk scroll otomatis ke bawah
    const scrollToBottom = () => {
        chatConversationList.scrollTop = chatConversationList.scrollHeight;
    };

    // Panggil fungsi saat halaman dimuat
    window.onload = scrollToBottom;

    // Fungsi untuk menambahkan pesan ke dalam daftar chat
    const addMessage = (message, isUser = true) => {
        const timeStamp = new Date().toLocaleTimeString();

        // Centang dua hanya untuk pesan pengguna
        const checkIcon = isUser ? '<i class="bx bx-check-double ms-1 text-primary"></i>' : '';

        const messageHTML = `
            <li class="clearfix ${isUser ? 'odd' : ''}">
                <div class="chat-conversation-text ${isUser ? 'ms-0' : ''}">
                    <div class="d-flex ${isUser ? 'justify-content-end' : ''}">
                        <div class="chat-ctext-wrap">
                            <p>${message}</p>
                        </div>
                    </div>
                    <p class="text-muted fs-12 mb-0 ms-3">${timeStamp} ${checkIcon}</p>
                </div>
            </li>
        `;
        chatConversationList.insertAdjacentHTML('beforeend', messageHTML);
        scrollToBottom();
    };

    // Fungsi untuk memproses pesan pengguna
    const processUserMessage = (userMessage) => {
        const lowerCaseMsg = userMessage.toLowerCase();

        // Cek apakah ada kata kunci dalam pesan
        for (let item of keywordResponses) {
            if (lowerCaseMsg.includes(item.keyword)) {
                return item.response; // Balasan sesuai kata kunci
            }
        }

        // Jika tidak ada kata kunci, pilih respon random
        return responses[Math.floor(Math.random() * responses.length)];
    };

    // Event saat mengirim pesan
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const userMessage = chatInput.value.trim();
        if (userMessage === '') return;

        // Tambahkan pesan pengguna
        addMessage(userMessage, true);

        // Clear input
        chatInput.value = '';

        // Proses dan berikan balasan setelah sedikit delay
        setTimeout(() => {
            const botResponse = processUserMessage(userMessage);
            addMessage(botResponse, false);
        }, 500);
    });