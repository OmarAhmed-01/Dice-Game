const myBtn = document.getElementById("btn-1");

myBtn.addEventListener("click", event=>{
    function compare(){
        let p2_dice = Math.floor(Math.random()*6)+1;
        let p1_dice = Math.floor(Math.random()*6)+1;
        
        if(p1_dice == 1){
            document.getElementById("myImage1").setAttribute("src", "./Media/dice1.png");
        }
        else if(p1_dice == 2){
            document.getElementById("myImage1").setAttribute("src", "./Media/dice2.png");
        }
        else if(p1_dice == 3){
            document.getElementById("myImage1").setAttribute("src", "./Media/dice3.png");
        }
        else if(p1_dice == 4){
            document.getElementById("myImage1").setAttribute("src", "./Media/dice4.png");
        }
        else if(p1_dice == 5){
            document.getElementById("myImage1").setAttribute("src", "./Media/dice5.png");
        }
        else{
            document.getElementById("myImage1").setAttribute("src", "./Media/dice6.png");
        }
        //===================================================================================
        if(p2_dice == 1){
            document.getElementById("myImage2").setAttribute("src", "./Media/dice1.png");
        }
        else if(p2_dice == 2){
            document.getElementById("myImage2").setAttribute("src", "./Media/dice2.png");
        }
        else if(p2_dice == 3){
            document.getElementById("myImage2").setAttribute("src", "./Media/dice3.png");
        }
        else if(p2_dice == 4){
            document.getElementById("myImage2").setAttribute("src", "./Media/dice4.png");
        }
        else if(p2_dice == 5){
            document.getElementById("myImage2").setAttribute("src", "./Media/dice5.png");
        }
        else{
            document.getElementById("myImage2").setAttribute("src", "./Media/dice6.png");
        }
        //===================================================================================
        console.log(p1_dice);
        console.log(p2_dice);
        if (p1_dice > p2_dice){
            document.querySelector("h1").innerHTML = ("Player 1 Wins 🤕");
        }
        else if (p2_dice > p1_dice){
            document.getElementById("H1").textContent = "Player 2 Wins 😒";
        }
        else{
            document.getElementById("H1").textContent = "Draw 🥱";
        }
    }
    compare();
});
