// Sidebar
    fetch('../settings/sidebar-2.html')
        .then(response => response.text())
        .then(data => document.getElementById('sidebarArda').innerHTML = data)
        .catch(error => console.error('Error loading sidebar:', error));
        
// Navbar
    fetch('../settings/navbar-2.html')
        .then(response => response.text())
        .then(data => document.getElementById('navbarArda').innerHTML = data)
        .catch(error => console.error('Error loading navbar:', error));

