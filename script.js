
//Mexendo com o dinossauro que vai ser controlado pelo player
// assim como no jogo original, o dinossauro executará apenas um movimento de pulo
// o movimento será realizado ao se pressionar o espaço.
const dino = document.querySelector('.dino');
function handleKeyUp(event) {
 if (event.keyCode === 32) {
     jump();
 }
}

function jump() {
    let position = 0;
    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                } else{
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            }, 20)
        } else {
            position +=20;
            dino.style.bottom = position + 'px';
        }
    }, 20);
}
document.addEventListener('keyup', handleKeyUp)