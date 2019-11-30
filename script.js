'use strict';


const CANVAS_IMG1 = './data/4x4.json';
const CANVAS_IMG2 = './data/32x32.json';
const LOGO_URL = './data/image.png';
let canvas1 = [];
let canvas2 = [];

fetch(CANVAS_IMG1).then(response => {
  return response.json();
}).then(data => {
  canvas1 = data;
}).catch(err => {
  console.log('The request failed!'); 
});

fetch(CANVAS_IMG2).then(response => {
  return response.json();
}).then(data => {
  canvas2 = data;
}).catch(err => {
  console.log('The request failed!'); 
});


let addCanvas = (canvasData) => {

  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  let width = canvasData[0].length;
  let height = canvasData.length;
  let scale = 512/width;

  canvas.width = width * scale; 
  canvas.height = height * scale;

  // Loop through each color and draw that section
  for(let row = 0; row < height; row++) {
      for(let col = 0; col < width; col++) { 
        if (canvasData[row][col].length == 4) {
          ctx.fillStyle = 'rgba(' + canvasData[row][col][0] + ',' + canvasData[row][col][1]+ ',' + canvasData[row][col][2] + ',' +  canvasData[row][col][3] + ')'; 
            ctx.fillRect(col * scale, row * scale, scale, scale); 
        }
        else {
          ctx.fillStyle = '#' + canvasData[row][col]; 
          ctx.fillRect(col * scale, row * scale, scale, scale);
        } 
      }
    } 
}

let addImg = () => {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let image = new Image();
    image.src = LOGO_URL;
    image.onload = function(){
        ctx.drawImage(image, 0, 0, 512, 512);
    }
}

let button1 = document.getElementById('button1');
button1.onclick = () => addCanvas(canvas1);

let button2 = document.getElementById('button2');
button2.onclick = () => addCanvas(canvas2);

let button3 = document.getElementById('button3');
button3.onclick = addImg;


