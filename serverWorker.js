self.addEventListener('install', function(event) {
    console.log('Service Worker installing.');
});

self.addEventListener('activate', function(event) {
    console.log('Service Worker activating.');
});
