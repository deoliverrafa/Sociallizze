const CACHE_NAME = 'sociallizze-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/public/assets/css/styles.min.css',
  '/public/assets/css/styles.min.css.map',
  '/public/assets/js/fab.js',
  '/public/assets/js/friends.bundle.js',
  '/public/assets/js/index.bundle.js',
  '/public/assets/js/nav.js',
  '/public/assets/js/posts.bundle.js',
  '/public/assets/js/profile.bundle.js',
  '/public/assets/js/settings.bundle.js',
  '/public/assets/js/theme.js',
  '/public/assets/js/variables.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

let deferredPrompt;

self.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  showInstallMessage();
});

function showInstallMessage() {
  if (deferredPrompt) {
    const installMessage = document.createElement('div');
    installMessage.id = 'install-message';
    installMessage.textContent = 'Instale nosso aplicativo para uma melhor experiência!';
    
    const installButton = document.createElement('button');
    installButton.textContent = 'Instalar';
    installButton.addEventListener('click', installPWA);

    document.body.appendChild(installMessage);
    document.body.appendChild(installButton);
  }
}

function installPWA() {
  if (deferredPrompt) {
    deferredPrompt.prompt();

    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('O usuário aceitou a instalação');
      } else {
        console.log('O usuário recusou a instalação');
      }

      document.getElementById('install-message').remove();
      document.querySelector('button').remove();

      deferredPrompt = null;
    });
  }
}
