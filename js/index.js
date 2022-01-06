const source = {
    scissor : "./img/Scissors.png",
    rock : " ./img/Rock.png",
    paper : "./img/Paper.png"
}
let score=0;

const hands = document.querySelectorAll('.hand')
hands.forEach(hand =>{
    hand.addEventListener('click',()=>{
        pickUserHand(hand.id)
        
    })
})

const pickUserHand = (userhand)=>{
    // hide the current page 
    let hands = document .querySelector('.hands')
    hands.style.display = 'none';
    // show the next page with the hand you picked 
    let contest = document.querySelector('.contest')
    contest.style.display = 'flex';
    // set the user pick
    document.getElementById('userpickImg').src = source[userhand];

    // set computer hand ...
    const choice = ['scissor','rock','paper']
    const computerhand = choice[Math.floor(Math.random() * choice.length)]
    document.getElementById('computerPickImg').src = source[computerhand]

    checkOutWinner(userhand,computerhand)

    // play again 

    const playagain = document.querySelector('.newGame')
    playagain.addEventListener('click',()=>{
        hands.style.display = 'flex';
        contest.style.display = 'none';
    })
    
}

const checkOutWinner = (userhand,computerhand)=>{

    if(userhand == 'scissor' && computerhand == 'paper'){
        labelOut('win')
    }
    else if (userhand == 'paper' && computerhand == 'rock'){
        labelOut('win')
      
    }
    else if(userhand == 'rock' &&  computerhand=='scissor'){
        labelOut('win')
   
    }
    else if(userhand == computerhand){
        labelOut('tie')
       
    }
    else{
        labelOut('lose')
        
    }
    
}


const labelOut = (work)=>{
    const desicion = document.getElementById('win')
    const scoreboard = document.getElementById('score')
    if(work == 'win'){
        desicion.innerHTML = 'YOU WIN'
        score++;
        scoreboard.innerHTML = score;
    }else if(work == 'tie'){
        desicion.innerHTML = 'MATCH TIE'
    }else{
        desicion.innerHTML = 'YOU LOSE'
    }
}

