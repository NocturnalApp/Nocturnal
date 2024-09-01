document.addEventListener('DOMContentLoaded', () => {
    const playBtn = document.getElementById('playBtn');
    playBtn.addEventListener('click', () => {
        alert('Playing Breaking Bad');
    });

    const menuBtn = document.getElementById('menuBtn');
    menuBtn.addEventListener('click', () => {
        alert('Menu clicked');
    });

    const settingsBtn = document.getElementById('settingsBtn');
    settingsBtn.addEventListener('click', () => {
        alert('Settings clicked');
    });
});

