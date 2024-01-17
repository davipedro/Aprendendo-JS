function playSound(soundId) {
    var audioElement = document.querySelector(soundId);
    
    if (audioElement != null) {
        audioElement.currentTime = 0;
        audioElement.play();
    }else{
        console.log(`Elemento ${soundId} não encontrado!`);
    }
}

const keyList = document.querySelectorAll('.tecla');

keyList.forEach(key => {
    const instrument = key.classList[1];

    const soundId = `#som_${instrument}`;

    key.onclick = function () {
        playSound(soundId);
    }

    key.onkeydown = function (event) {
        if (event.code == 'Enter' || event.code == 'Space') {
            key.classList.add('ativa');
        }
    }
    key.onkeyup = function () {
        key.classList.remove('ativa');
    }
});