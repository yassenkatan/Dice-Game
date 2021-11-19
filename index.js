var randnum1=Math.floor(Math.random()*6)+1;
var randimg1="dice"+randnum1+".png";
var randsrc1="Images/"+randimg1;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randsrc1);


var randnum2=Math.floor(Math.random()*6)+1;
var randimg2="dice"+randnum2+".png";
var randsrc2="Images/"+randimg2;
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randsrc2);

if(randnum1>randnum2)
{
    document.querySelector("h1").innerHTML="The Player 1 Wins ";
}
else if(randnum2>randnum1){
    document.querySelector("h1").innerHTML="The Player 2 Wins ";
} 
else
{
    document.querySelector("h1").innerHTML="DRAW !! ";
}
