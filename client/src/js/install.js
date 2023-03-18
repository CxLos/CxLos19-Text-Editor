const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {

  window. deferredPrompt = event;

  butInstall.removeAttribute('hidden');
    
});

butInstall.addEventListener('click', async () => {

  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    return;
  }

  promptEvent.prompt();

  const result = await promptEvent.userChoice;

  if (result.outcome === 'accepted') {

    console.log('User accepted the A2HS prompt', result);

  } else {

    console.log('User dismissed the A2HS prompt', result);

  }

  window.deferredPrompt = null;

  butInstall.setAttribute('hidden', true);

});

window.addEventListener('appinstalled', (event) => {
  
  console.log('App installed', event);
  window.deferredPrompt = null;

});
