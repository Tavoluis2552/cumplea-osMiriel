document.getElementById('balloon-btn').addEventListener('click', function() {
    // Reproducir la canción de cumpleaños
    var birthdaySong = document.getElementById('birthdaySong');
    birthdaySong.play();

    // Crea y suelta un globo
    const balloon = document.createElement('div');
    balloon.textContent = '🎈';
    balloon.style.position = 'absolute';
    balloon.style.left = Math.random() * window.innerWidth + 'px';
    balloon.style.bottom = '0px';
    balloon.style.fontSize = '24px';
    document.body.appendChild(balloon);

    let bottom = 0;
    const interval = setInterval(function() {
        bottom += 2;
        balloon.style.bottom = bottom + 'px';
        if (bottom > window.innerHeight) {
            clearInterval(interval);
            document.body.removeChild(balloon);
        }
    }, 10);
});

