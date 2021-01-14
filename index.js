const canvas = document.getElementById('canvas');
const clear = document.querySelector("#clear");

// Context for the canvas for 2 dimensional operations 
const ctx = canvas.getContext('2d'); 
//resize();

let coord = {x:0 , y:0};  
 
let paint = false;

//set events
canvas.addEventListener('mousedown',startPainting);
canvas.addEventListener('onmouseup',stopPainting);
canvas.addEventListener('mousemove',sketch);
    
function resize(){ 
  ctx.canvas.width = canvas.clientWidth; 
  ctx.canvas.height = canvas.clientHeight; 
} 
    
function getPosition(event){ 
  coord.x = event.clientX; 
  coord.y = event.clientY; 
} 
  
function startPainting(event){ 
  paint = true; 
  getPosition(event);
  console.log(event.x,event.y); 
} 

function stopPainting(){ 
  paint = false;
  console.log("stop"); 
} 

function moving(event){
  console.log("moving");
}
    
function sketch(event){ 
  //if (!paint) return; 
  if(event.buttons != 1) return;

  console.log("yes");
  ctx.beginPath(); 
    
  ctx.lineWidth = 5; 
  ctx.lineCap = 'round'; 
  ctx.strokeStyle = 'black'; 
      
  // The cursor to start drawing 
  // moves to this coordinate 
  ctx.moveTo(coord.x, coord.y); 
   
  // The position of the cursor 
  // gets updated as we move the 
  // mouse around. 
  getPosition(event); 
   
  // A line is traced from start 
  // coordinate to this coordinate 
  ctx.lineTo(coord.x , coord.y);
  //  console.log(coord); 
    
  // Draws the line. 
  ctx.closePath();
  ctx.stroke(); 
}

clear.addEventListener("click",function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})