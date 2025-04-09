document.addEventListener('DOMContentLoaded', function () {
    const copyright = document.getElementById('copyright');
    if (copyright) {
        copyright.innerText = 'Arda Ganz';
    } else {
        console.error('Element not found!');
    }
});


