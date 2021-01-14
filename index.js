window.addEventListener('load', ()=>{ 
        
    resize(); 
    document.addEventListener('mousedown', startPainting); 
    document.addEventListener('mouseup', stopPainting); 
    document.addEventListener('mousemove', sketch); 
    window.addEventListener('resize', resize); 
}); 
    
const canvas = document.querySelector('#canvas'); 
const clear = document.querySelector("#clear");
   
// Context for the canvas for 2 dimensional operations 
const ctx = canvas.getContext('2d'); 
    
 
function resize(){ 
  ctx.canvas.width = window.innerWidth; 
  ctx.canvas.height = window.innerHeight; 
} 
    
 
let coord = {x:0 , y:0};  
 
let paint = false; 
    

function getPosition(event){ 
  coord.x = event.clientX - canvas.offsetLeft; 
  coord.y = event.clientY - canvas.offsetTop; 
} 
  

function startPainting(event){ 
  paint = true; 
  getPosition(event); 
} 
function stopPainting(){ 
  paint = false; 
} 
    
function sketch(event){ 
  if (!paint) return; 
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
    
  // Draws the line. 
  ctx.stroke(); 
}

clear.addEventListener("click",function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})