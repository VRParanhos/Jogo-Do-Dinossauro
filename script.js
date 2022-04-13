
//Mexendo com o dinossauro que vai ser controlado pelo player
// assim como no jogo original, o dinossauro executará apenas um movimento de pulo
// o movimento será realizado ao se pressionar o espaço.
const dino = document.querySelector('.dino');
let isJumping = false; //variável auxiliar utilizada na correção de bugs com o pulo definido;
function handleKeyUp(event) {
 if (event.keyCode === 32) {
     if (!isJumping){
         jump();
        }
    }
}

function jump() {
    let position = 0;
    isJumping = true;
    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
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



// Gerando e mexendo os Cactos que servirão de obstáculo no jogo
const background = document.querySelector('.background');
function createCacto(){
    let posicaoCacto = 1000;
    let randomTime = Math.random() * 6000;
    const cacto = document.createElement('div');
    cacto.classList.add('cacto');
    cacto.style.left= 1000 + 'px';
    background.appendChild(cacto);
    cactoLeftInterval = setInterval(() => {

        if (posicaoCacto <= -60){
            clearInterval(cactoLeftInterval);
            background.removeChild(cacto);
        }else {
            posicaoCacto -=10;
            cacto.style.left = posicaoCacto + 'px';
        }
    },20);
    setTimeout(createCacto, randomTime)
}



createCacto();
document.addEventListener('keyup', handleKeyUp);


