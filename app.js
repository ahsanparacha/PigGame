/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game*/

var activePLayer,activePlayer,gamePlaying;
var score = [0,0];
var x =prompt("player 1");
var y =prompt("player 2");
gameinitalization();
    

document.querySelector('.btn-roll').addEventListener('click' , function(){
    if(gamePlaying){
          var  dice = Math.floor(Math.random() * 6) + 1 ;
    
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = "dice-" + dice + ".png";
    
    if(dice !==1){
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }
    else{
       nextPlayer();
    }
    
    
    }
  
});


document.querySelector('.btn-hold').addEventListener('click' , function(){
       if(gamePlaying){
             score[activePlayer] += roundScore;
       document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
    
    
       if(score[activePlayer] >= 100){
           document.querySelector('#name-' + activePlayer).textContent = "Winner!!"
           document.querySelector('.dice').style.display = "none" ;
           document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
           document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
           gamePlaying = false;
           
       }
       else{
        nextPlayer();
    }
       }
     
       
});


 


function nextPlayer(){
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
    
        document.querySelector('#current-0').textContent = 0;
        document.querySelector('#current-1').textContent = 0;
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display = 'none';
    
}







document.querySelector('.btn-new').addEventListener('click' , gameinitalization);    



function gameinitalization(){
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    document.querySelector('#name-0').textContent = x;
    document.querySelector('#name-1').textContent = y;
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.btn-roll').style.display = 'block';   
    document.querySelector('.btn-hold').style.display = 'block'; 
    
    
    activePlayer = 0;
    roundScore = 0;
    score = [0,0];
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';
    

    
}










     
     
    