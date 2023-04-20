var hello="Hello";
var Name="My name Sriyansh";
console.log(hello);
console.log(Name);
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(430, 330, 40, 0, 2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(e){
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    console.log("X = " + mouse_x + " ,Y = " + mouse_y);
    circle(mouse_x, mouse_y);
}
function circle(mouse_x, mouse_y){
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(mouse_x, mouse_y, 40, 0, 2*Math.PI);
ctx.stroke();
}
