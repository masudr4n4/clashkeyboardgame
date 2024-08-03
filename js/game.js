const alphabets = "abcdefghijklmnopqrstuvwxyz/"  
//First tab
let startBtn = document.getElementById('start-btn');

// second tab
let playGround = document.getElementById('playground');
let lastScore = parseInt(playGround.querySelector("#score"));

//Third tab
let result = document.querySelector("#result")


// game score
let gameScore = document.querySelector("#game-score")

startBtn.addEventListener('click',function(event){
    console.log("Start Button got clicked!")
    event.target.parentNode.classList.add('hidden');
    playGround.classList.remove('hidden')
    resetScore();
})

function getRandomChar(){
    return alphabets[parseInt(Math.random()*alphabets.length)]
}
function resetScore(){
    let btns = document.getElementsByTagName('kbd')
    for (let btn of btns){
        btn.classList.remove('bg-orange-600')
    }
    let randCr = getRandomChar()
    playGround.querySelector("#charecter").innerText = randCr.toUpperCase();
    document.querySelector(`#${randCr !== '/'? randCr : "\\/"}`).classList.add('bg-orange-600')
    playGround.querySelector("#life").innerText = 10;
    playGround.querySelector("#score").innerText = 0;

}

document.addEventListener('keypress',function(event){
 if(playGround.querySelector("#charecter").innerText.toLowerCase() == event.key){
    console.log("Key matched!")
    let score = parseInt(playGround.querySelector("#score").innerText) + 1
    playGround.querySelector("#score").innerText = score;
    let chr = getRandomChar()
    playGround.querySelector("#charecter").innerText = chr.toUpperCase();
    document.querySelector(`#${chr !== '/'? chr : "\\/"}`).classList.add('bg-orange-600')
 }else{
    let life = parseInt(playGround.querySelector("#life").innerText)
    let newLife = life - 1
    playGround.querySelector("#life").innerText = newLife;
    if (newLife <= 0){
        lastScore = parseInt(playGround.querySelector("#score").innerText)
        playGround.classList.add('hidden');
        resetScore();
        gameScore.innerText = lastScore;
        result.classList.remove('hidden')
        document.querySelector(`#${playGround.querySelector("#charecter").innerText.toLowerCase()}`).classList.remove('bg-orange-600')
    }
 }
})

document.addEventListener('keyup',function(event){
    console.log(event.key)
    document.querySelector(`#${event.key !== '/'? event.key : "\\/"}`).classList.remove('bg-orange-600')
})

document.querySelector("#play-again").addEventListener('click',function(event){
    resetScore();
    playGround.classList.remove('hidden');
    event.target.parentNode.classList.add('hidden');
})