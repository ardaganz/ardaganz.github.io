// Initialize AOS with subtle animations
AOS.init({
    duration: 700,
    once: true,
    easing: 'ease-out',
    delay: 100
});

// Fetch visitor count
fetch('/visitor')
    .then(response => response.json())
    .then(data => {
        const visitorCount = data.AgungApi;
        document.getElementById('visitor-count').innerText = visitorCount;
        animateCounter('visitor-count', 0, visitorCount, 1500);
    })
    .catch(error => {
        console.error('Error fetching visitor data:', error);
    });

// Fetch total requests
fetch('/api-requests')
    .then(response => response.json())
    .then(data => {
        const requestCount = data.totalAllRequests;
        const todayRequestCount = data.todayRequests;
        document.getElementById('totalreq').innerText = requestCount;
        document.getElementById('todayreq').innerText = todayRequestCount;
        animateCounter('totalreq', 0, requestCount, 1500);
    })
    .catch(error => {
        console.error('Error fetching request data:', error);
    });

// Update runtime
function updateRuntime() {
    fetch('/runtime')
        .then(response => response.json())
        .then(data => {
            const runtime = data.runtime;
            document.getElementById('runtime').innerText = runtime;
        })
        .catch(error => {
            console.error('Error fetching runtime data:', error);
        });
}
setInterval(updateRuntime, 1000);
updateRuntime();

// Update RAM usage
function updateRam() {
    fetch('/info-server')
        .then(response => response.json())
        .then(data => {
            const ramUsage = data.infoRAM.digunakan;
            const ramTotal = data.infoRAM.total;
            document.getElementById('RamUsage').innerText = ramUsage;
            document.getElementById('RamTotal').innerText = ramTotal;
        })
        .catch(error => {
            console.error('Error fetching RAM data:', error);
        });
}
setInterval(updateRam, 1000);
updateRam();

// Get user's IP address
function getip() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            document.getElementById("ip").textContent = data.ip;
        })
        .catch(error => {
            console.error('Error fetching IP data:', error);
        });
}

function animateCounter(elementId, start, end, duration) {
    const element = document.getElementById(elementId);
    const range = end - start;
    // Adjust step calculation to ensure smooth animation
    const frameRate = 60; // Standard frame rate
    const frames = duration / 1000 * frameRate;
    const step = range / frames;
    let current = start;

    const timer = setInterval(() => {
        current += step;
        if ((step > 0 && current >= end) || (step < 0 && current <= end)) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.round(current);
    }, 1000 / frameRate); // Proper timing interval
}

document.addEventListener('DOMContentLoaded', function () {
    getip();
    const searchInput = document.querySelector('.search-input');
    const tableCards = document.querySelectorAll('.table-card');
    const noResults = document.querySelector('.no-results');

    tableCards.forEach(card => {
        card.style.display = '';
    });

    searchInput.addEventListener('input', function (e) {
        const searchTerm = e.target.value.toLowerCase().trim();
        let hasResults = false;

        tableCards.forEach(card => {
            const rows = card.querySelectorAll('.feature-row');
            let cardHasResults = false;

            rows.forEach(row => {
                const text = row.textContent.toLowerCase();
                const matches = text.includes(searchTerm);
                row.style.display = matches ? '' : 'none';
                if (matches) {
                    cardHasResults = true;
                }
            });

            card.style.display = cardHasResults ? '' : 'none';
            hasResults = hasResults || cardHasResults;
        });

        noResults.style.display = hasResults ? 'none' : 'block';
    });

    searchInput.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            this.value = '';
            this.dispatchEvent(new Event('input'));
        }
    });

    function updateClock() {
        const clockElement = document.getElementById('clock');
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        clockElement.textContent = timeString;
    }

    setInterval(updateClock, 1000);
    updateClock();
    
    // UNTUK CURSOR - Fixed cursor implementation
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (e) => {
        requestAnimationFrame(() => {
            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });
    });

    document.addEventListener("mouseenter", () => {
        cursor.style.opacity = "1";
    });

    document.addEventListener("mouseleave", () => {
        cursor.style.opacity = "0";
    });
    
    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, .card, .action-btn');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });

    // Add feature highlight effect
    document.querySelectorAll('.feature-row').forEach(row => {
        row.addEventListener('mouseenter', () => {
            row.style.background = 'var(--hover-bg)';
        });
        
        row.addEventListener('mouseleave', () => {
            row.style.background = '';
        });
    });
});

// Responsive checks
function checkResponsive() {
    if (window.innerWidth < 768) {
        document.body.classList.add('mobile-view');
    } else {
        document.body.classList.remove('mobile-view');
    }
}

window.addEventListener('resize', checkResponsive);
checkResponsive();