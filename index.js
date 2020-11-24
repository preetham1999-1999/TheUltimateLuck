// var player_1 = prompt("Enter Player-1 name:");
// var player_2 = prompt("Enter Player-2 name:");
// var p_1 = "Mr. "+player_1;
// var p_2 = "Mr. "+player_2;
//
// player_1 = "Congrats Mr."+ player_1 + "🏆";
// player_2 = "Congrats Mr."+ player_2 + "🏆";
//


var randomNumber1 = Math.random();
randomNumber1 = Math.floor((randomNumber1*6) + 1);
var randomNumber2 = Math.random();
randomNumber2 = Math.floor((randomNumber2*6) + 1);

// function playSound () {
//     document.getElementById('play').play();
// }
// <audio id="play" src="http://www.soundjay.com/button/beep-07.wav"></audio>
//
// var sound = document.querySelector(".btn");
//
// <button onclick="playSound()">sound</button>



var delayInMilliseconds = 2000; //1 second
function showY()
{
  // if (document.getElementById)
  // document.querySelector(".img2").style.visibility = "visible";
  document.querySelector(".img2").style.opacity="1";
}
// blink "off" state
function hideY()
{
  // if (document.getElementById)
  // document.querySelector(".img2").style.visibility = "hidden";
  document.querySelector(".img2").style.opacity="0.5";
}

function showX()
{
  // if (document.getElementById)
  // document.querySelector(".img1").style.visibility = "visible";
  document.querySelector(".img1").style.opacity="1";
}
// blink "off" state
function hideX()
{
  // if (document.getElementById)
  // document.querySelector(".img1").style.visibility = "hidden";
  document.querySelector(".img1").style.opacity="0.5";
}


setTimeout(function() {
      //your code to be executed after 1 second
    var diceSelect1 = "images/dice"+randomNumber1+".png";
    document.querySelector(".img2").src=diceSelect1;


    var player_1 = "Congrats Mr.X🏆";
    var player_2 = "Congrats Mr.Y🏆";

    // document.querySelector(".p_1").innerHTML=p_1;
    // document.querySelector(".p_2").innerHTML=p_2;

    document.querySelector(".p_1").innerHTML="X";
    document.querySelector(".p_2").innerHTML="Y";



    // var randomNumber1 = Math.random();
    // randomNumber1 = Math.floor((randomNumber1*6) + 1);
    // var diceSelect1 = "images/dice"+randomNumber1+".png";
    // document.querySelector(".img2").src=diceSelect1;

    // toggle "on" and "off" states every 450 ms to achieve a blink effect
    // end after 4500 ms (less than five seconds)

    var diceSelect2 = "images/dice"+randomNumber2+".png";
    document.querySelector(".img1").src=diceSelect2;

    if(randomNumber1 > randomNumber2){
      document.querySelector("h1").innerHTML=player_2;
      document.querySelector("h1").style.fontSize="4rem";

      for(var i=900; i < 3500; i=i+900)
      {
      	setTimeout("hideY()",i);
      	setTimeout("showY()",i+450);
      }
    }
    else if(randomNumber2 > randomNumber1){
      document.querySelector("h1").innerHTML=player_1;
      document.querySelector("h1").style.fontSize="4rem";

      for(var i=900; i < 3500; i=i+900)
      {
      	setTimeout("hideX()",i);
      	setTimeout("showX()",i+450);
      }
    }
    else{
      document.querySelector("h1").innerHTML="It's a DRAW👇";
      document.querySelector("h1").style.fontSize="4rem";
    }

}, delayInMilliseconds);
