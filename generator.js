/*$number1=document.getElementById("text");
var count=0;

function generator(){
    for(var i=0; i<=$number1; i++){
        count++;
        btn=document.createElement("button");
        btn.id="btn1";
        document.getElementById("container").appendChild("btn1");
        
        btn.style.display="inherit";
        btn.innerHTML="New Button"+count;
    }
}*/
$number1=document.getElementById("text1").value;
var count=0;
function generator() {
    $number1=document.getElementById("text1").value;
    $color1=document.getElementById("color1").value;
    for(var i=0;i<$number1;i++){
        count++;
        btn = document.createElement("button");
        btn.id="btn1";
        btn.innerHTML="New Button " +count;
        document.getElementById("new").appendChild(btn);
    }
}




