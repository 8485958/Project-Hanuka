/*document.getElementById("b1").onclick = function(){
document.getElementById("input").style.display="block"
}

document.getElementById("b3").onclick = function(){
    document.getElementById("input").style.display="none"
    document.getElementById("pp").style.display="block"
}

document.getElementById("b4").onclick = function(){
    document.getElementById("mm").style.display="block"
}*/
var i = 0;
var mesimot = [0,9];
while(true)
{
    document.getElementById("submit").onclick = function(){
        mesimot[i]="oo";
    }
    alert(mesimot[i]);
    i++;
    if(i>5)
    break;
}


    