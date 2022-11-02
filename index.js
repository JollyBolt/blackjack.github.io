let cards= []
let sum=0
let isAlive = false
let lost = false
let hasBlackJack = false
let message = ""

let mes = document.getElementById('message');
let sumEl = document.getElementById('sum')
let cardEl = document.querySelector('#card')
let newgame= document.querySelector('#start')
let pl=document.getElementById('playerr')

let player={
    name:"JB",
    chips:200
}

pl.textContent = player.name +": $" + player.chips

function randomCard()
{
    let x=(Math.floor(Math.random()*10)+2)
    return x
}

function startGame(){
    isAlive=true
    let firstCard = randomCard()
    let secondCard = randomCard()
    cards=[firstCard,secondCard]
    sum = firstCard + secondCard;
    lost = false
    hasBlackJack = false
    newgame.textContent= "New Game"
    renderGame();
}

function renderGame(){

cardEl.textContent = "Cards: "

for (let i = 0; i < cards.length; i++) {
    if(i===cards.length-1)
    cardEl.textContent += cards[i];
    else
    cardEl.textContent += cards[i] + " ,";
}

sumEl.textContent ="Sum: "+ sum

if(sum < 21)
{
    message = "Do you want to draw a new card?"
}
else if(sum === 21)
{
    message = "You Won! You've got Blackjack!🥳"
    hasBlackJack = true
}
else
{
    message = "You Lost"
    lost = true
    isAlive=false
}

mes.textContent = message
}

function newCard(){
    if(isAlive && (!hasBlackJack)){
    if(lost)
    mes.textContent = "You have already lost"
    else{
    let card = randomCard()
    cards.push(card)
    sum = sum + card
    renderGame()
    }}
    else {
        if(!isAlive)
        mes.textContent = " Start the game first!"
        else mes.textContent = " You have already won!"
    }
}
