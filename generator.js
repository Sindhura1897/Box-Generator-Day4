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
        btn.style="background-color:" +($color1) + ";"
        document.getElementById("new").appendChild(btn);
    }
}




