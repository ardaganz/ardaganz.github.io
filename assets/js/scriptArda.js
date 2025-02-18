// SCRIPT BATTERY BY ARDAGANZ
    (function() {
      const batteryIcon = document.getElementById("battery-icon");
      const batteryLevel = document.getElementById("battery-level");
      const chargingStatus = document.getElementById("charging-status");

      function updateBatteryIcon(level) {
        if (level > 0.75) {
          batteryIcon.className = "fa fa-battery-full";
        } else if (level > 0.5) {
          batteryIcon.className = "fa fa-battery-three-quarters";
        } else if (level > 0.25) {
          batteryIcon.className = "fa fa-battery-half";
        } else if (level > 0.1) {
          batteryIcon.className = "fa fa-battery-quarter";
        } else {
          batteryIcon.className = "fa fa-battery-empty";
        }
      }

      navigator.getBattery()
        .then(battery => {
          if (battery) {
            function setStatus() {
              const level = battery.level;
              batteryLevel.innerHTML = Math.round(level * 100) + "%";
              chargingStatus.innerHTML = battery.charging ? "⚡⚡" : "Discharging";
              updateBatteryIcon(level);
              console.log(`Battery Level: ${batteryLevel.innerHTML}, Charging: ${chargingStatus.innerHTML}`);
            }

            setStatus();
            battery.addEventListener("levelchange", setStatus, false);
            battery.addEventListener("chargingchange", setStatus, false);
          } else {
            throw new Error('Battery API not supported on your device/computer');
          }
        })
        .catch(error => {
          console.error(error.message);
        });
    })();










// SCRIPT HARI DAN TANGGAL
    // Fungsi untuk menampilkan hari dan tanggal
    function displayDayAndDate() {
      const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
      const today = new Date();

      // Mendapatkan nama hari
      const dayName = days[today.getDay()];
      document.getElementById("Today").innerText = `${dayName}`;

      // Membuat format tanggal DD/MM/YYYY
      const day = String(today.getDate()).padStart(2, '0');
      const month = String(today.getMonth() + 1).padStart(2, '0'); // Bulan dimulai dari 0
      const year = today.getFullYear();
      const formattedDate = `${day}/${month}/${year}`;
      document.getElementById("Date").innerText = `${formattedDate}`;
    }

    // Memanggil fungsi saat halaman dimuat
    displayDayAndDate();
  
  
  
  
  
  
  
  
  
  
// SCRIPT JAM
        function updateClock() {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const currentTime = `${hours}:${minutes}:${seconds}`;
            document.getElementById('Clock').textContent = currentTime;
        }

        setInterval(updateClock, 1000); // Update setiap 1 detik
        updateClock(); // Panggil langsung untuk menampilkan waktu saat halaman dimuat
    
    
    







//FULL SCREEN BY ARDA
    const fullScreenElement = document.getElementById('fullScreenElement');
    const fullscreenButton = document.getElementById('fullscreenButton');

    fullscreenButton.addEventListener('click', () => {
      if (fullScreenElement.requestFullscreen) {
        fullScreenElement.requestFullscreen();
      } else if (fullScreenElement.mozRequestFullScreen) { /* Firefox */
        fullScreenElement.mozRequestFullScreen();
      } else if (fullScreenElement.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        fullScreenElement.webkitRequestFullscreen();
      } else if (fullScreenElement.msRequestFullscreen) { /* IE/Edge */
        fullScreenElement.msRequestFullscreen();
      }
    });