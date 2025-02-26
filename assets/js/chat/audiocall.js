
    // Ambil elemen audio dan tombol call
    var callSound = document.getElementById("callSound");
    var audioVideoCallBtn = document.getElementById("videocallBtn"); // Video Call
    var voiceCallBtn = document.getElementById("voicecallBtn"); // Voice Call
    var videoCallModal = document.getElementById("videocall"); // Audio Mati saat modal bagian luar diklik
    var voiceCallModal = document.getElementById("voicecall"); // Audio Mati saat modal bagian luar diklik
    var endVideoCallBtn = document.getElementById("endVideoCall"); // Audio Mati saat klik button
    var endVoiceCallBtn = document.getElementById("endVoiceCall"); // Audio Mati saat klik button

    // Saat tombol video call diklik, putar suara
    audioVideoCallBtn.addEventListener("click", function() {
        callSound.play();
    });

    // Saat tombol voice call diklik, putar suara
    voiceCallBtn.addEventListener("click", function() {
        callSound.play();
    });

    // Saat salah satu modal ditutup, hentikan suara
    videoCallModal.addEventListener("hidden.bs.modal", function () {
        stopCallSound();
    });

    voiceCallModal.addEventListener("hidden.bs.modal", function () {
        stopCallSound();
    });

    // Saat tombol "End Call" diklik, hentikan suara & tutup modal
    endVideoCallBtn.addEventListener("click", function () {
        stopCallSound();
        var videoModal = bootstrap.Modal.getInstance(videoCallModal);
        videoModal.hide(); // Menutup modal video call
    });

    endVoiceCallBtn.addEventListener("click", function () {
        stopCallSound();
        var voiceModal = bootstrap.Modal.getInstance(voiceCallModal);
        voiceModal.hide(); // Menutup modal voice call
    });

    // Fungsi untuk menghentikan suara
    function stopCallSound() {
        callSound.pause();
        callSound.currentTime = 0;
    }