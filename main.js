
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
    radius= 40;
    mouseEvent="empty";
    canvas.addEventListener("mousedown", my_mousedown);
    
    function my_mousedown(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        radius=document.getElementById("radius_of_circle").value;
        //Addictonal Activity ends
        last_position_of_x = e.clientX - canvas.offsetLeft;
        last_position_of_y = e.clientY - canvas.offsetTop;
 mouseEvent="mouseDown";
    }
 canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e) {
    mouseEvent="mouseUp";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e) {
    mouseEvent="mouseUp";
}
    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {

         current_position_of_x = e.clientX - canvas.offsetLeft;
         current_position_of_y = e.clientY - canvas.offsetTop;
   if (mouseEvent=="mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;


        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_x + "y = " + current_position_of_y);
        ctx.arc(current_position_of_x,current_position_of_y, radius, 0 , 2*Math.PI);
                ctx.stroke();
    }      

        last_position_of_x = current_position_of_x; 
        last_position_of_y = current_position_of_y;
    }

  function cleararea() {
      ctx.clearRect(0,0,canvas.width,canvas.height);
  }