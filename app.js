let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let message = document.querySelector(".message");
let msg=  document.querySelector("#msg");
let turnO = true;

const winPatterns = [
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];


boxes.forEach((box) => {
 box.addEventListener("click",() => {
  //console.log(" box clicked ");
  if(turnO){
   //PLAYER O
   box.innerText = "O";
   turnO = false;
  }
   else{
    //PLAYER X
    box.innerText = "X";
    turnO = true;
   }
box.disabled = true;


checkWinner();
 });
});


const disableBoxes = () => {
 for(let box of boxes){
  box.disabled = true;
 }
}

const enableBoxes = () => {
 for(let box of boxes){
  box.disabled = false;
  box.innerText = "";
 }
}






const showWinner = (winner) =>{
 msg.innerText = `Congratulations ! Winner is ${winner}`;
 message.classList.remove("hide");
 disableBoxes();
}


const checkWinner =() => {
 for( let patterns of winPatterns){
 // console.log(i[0] , i[1] , i[2] );
 // console.log(
 //  boxes[i[0]].innerText,
 // boxes[i[1]].innerText,  
 //  boxes[i[2]].innerText
 // );

  let pos1value = boxes[patterns[0]].innerText;
  let pos2value = boxes[patterns[1]].innerText;
  let pos3value =  boxes[patterns[2]].innerText;

  if(pos1value != "" && pos2value != "" && pos3value != "" ){
   if(pos1value === pos2value && pos2value === pos3value ){
    //console.log("Winner",pos1value);
    showWinner(pos1value);

   }
  }
 }
};
const resetGame = () => {
 turnO = true;
 enableBoxes();
 message.classList.add("hide");
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);