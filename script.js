
function getComChoice(){
    let num=Math.floor(3*Math.random())
    if(num===0)return "rock";
    else if(num===1)return "paper";
    else return "scissors";
}


function getHumanChoice(){
    let userInput=prompt("enter your choice: ")
    // console.log(userInput)
    return userInput;
}


let humanScore, computerScore;

function playGame(){
 humanScore=0, computerScore=0;

    function playRound(humanChoice, computerChoice){
    humanChoice=humanChoice.toLowerCase();
    if(humanChoice===computerChoice){
        console.log("draw");
    }else{
        if(humanChoice==="rock"){
            if(computerChoice==="scissors"){
                console.log("You win! rock beats scissors");
                humanScore++;
            }else{
                console.log("You Lose! paper beats Rock")
                computerScore++;
            }
        }
        else if(humanChoice==="paper"){
            if(computerChoice==="scissors"){
                console.log("You Lose! scissors beats paper");
                computerScore++;
            }else{
                console.log("You Win! paper beats rock");
                humanScore++;
            }
        }
        else{
            if(computerChoice==="rock"){
                console.log("You Lose! rock beats scissors");
                computerScore++;
            }else{
                console.log("You win! scissors beats paper");
                humanScore++;
            }
        }
    }
}
    for(let i=0;i<5;i++){
        let humanChoice=getHumanChoice();
        let computerChoice=getComChoice();
        playRound(humanChoice, computerChoice);

    }
}