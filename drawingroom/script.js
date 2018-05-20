function setup()
{
    createCanvas(520, 720);
    background("#acacac")
}
function mouseDragged(){
    socket.emit("cords",[mouseX, mouseY]);
}
function main(){
     socket = io.connect('http://localhost:3000');

     socket.on("nkarel", drawEllipse);
     function drawEllipse(d)
     {
         ellipse(d[0],d[1], 5, 5)
     }
}

window.onload = main;