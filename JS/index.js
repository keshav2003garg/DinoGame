let score=0;
let cross=true;

const gameContainer = document.querySelector('.gameContainer');
const scoreCount = document.querySelector('.scoreCount');
const gameOver = document.querySelector('.gameOver');
const dino = document.querySelector('.dino');
const obstacle = document.querySelector('.obstacle');

const audio = new Audio('../assets/music.mp3');
const audioGameOver = new Audio('../assets/gameover.mp3');
setTimeout(() => {
    audio.play();
}, 500);
document.onkeydown = function(e){
    console.log(e.keyCode);
    if(e.keyCode==38){
        dino.classList.add('animateDino');
        setTimeout(()=>{
            dino.classList.remove('animateDino');
        }, 1000)
    }
    if(e.keyCode==32){
        dino.classList.add('animateDinoHigh');
        setTimeout(()=>{
            dino.classList.remove('animateDinoHigh');
        }, 500)
    }
    if(e.keyCode==39){
        dino.style.left = (dino.offsetLeft+25)+"px"
        dino.style.transform = "rotateY(0deg)"
    }
    if(e.keyCode==37){
        dino.style.left = (dino.offsetLeft-25)+"px"
        dino.style.transform = "rotateY(180deg)"
    }
}

setInterval(()=>{
    dx=dino.offsetLeft;
    dy=dino.offsetTop;
    ox=obstacle.offsetLeft;
    oy=obstacle.offsetTop;

    offsetX=Math.abs(dx-ox);
    offsetY=Math.abs(dy-oy);

    scoreCount.innerHTML=`Your Score: ${score}`;

    if(offsetX<75 && offsetY<40){
        obstacle.classList.remove('animateObstacle');
        score--;
        gameContainer.style.opacity = '0.5';
        gameOver.style.visibility = 'visible';
        audio.pause();
        audioGameOver.play();
        setTimeout(() => {
            audioGameOver.pause();
        }, 1000);
        dino.classList.add('animateDinoDeath')
        setTimeout(() => {
            dino.classList.remove('dino')
        }, 2000);
    }
    else if(offsetX<135 && cross){
        score++;
        cross=false;
        setTimeout(() => {
            cross=true;
        }, 1000);
    }

}, 1);