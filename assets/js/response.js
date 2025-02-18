// Sidebar
    fetch('settings/sidebar.html')
        .then(response => response.text())
        .then(data => document.getElementById('sidebarArda').innerHTML = data)
        .catch(error => console.error('Error loading sidebar:', error));
        
// Navbar
    fetch('settings/navbar.html')
        .then(response => response.text())
        .then(data => document.getElementById('navbarArda').innerHTML = data)
        .catch(error => console.error('Error loading navbar:', error));

