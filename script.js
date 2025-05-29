fetch('https://376d-2001-b07-5d39-f019-94b9-334a-8c61-71f2.ngrok-free.app', {
    headers: {
        'User-Agent': 'CustomBrowser/1.0',
        'ngrok-skip-browser-warning': 'true'
    }
})
.then(response => response.text())
.then(data => {
    document.write(data);
})
.catch(error => console.error('Errore:', error));
