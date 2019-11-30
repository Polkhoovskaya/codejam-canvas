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

let addCanvas1Data = () => {
 

    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let width = canvas1[0].length;
    let height = canvas1.length;
    let scale = 512/width;

    canvas.width = width * scale; 
    canvas.height = height * scale;

    // Loop through each color and draw that section
    for(let row = 0; row < height; row++) {
        for(let col = 0; col < width; col++) { 
            ctx.fillStyle = '#' + canvas1[row][col]; 
            ctx.fillRect(col * scale, row * scale, scale, scale); 
        }
    }
  }
let addCanvas2Data = () => {

    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let width = canvas2[0].length;
    let height = canvas2.length;
    let scale = 512/width;

    canvas.width = width * scale; 
    canvas.height = height * scale;

    // Loop through each color and draw that section
    for(let row = 0; row < height; row++) {
        for(let col = 0; col < width; col++) { 
            ctx.fillStyle = 'rgba(' + canvas2[row][col][0] + ',' + canvas2[row][col][1]+ ',' + canvas2[row][col][2] + ',' +  canvas2[row][col][3] + ')'; 
            ctx.fillRect(col * scale, row * scale, scale, scale); 
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
button1.onclick = addCanvas1Data;

let button2 = document.getElementById('button2');
button2.onclick = addCanvas2Data;

let button3 = document.getElementById('button3');
button3.onclick = addImg;


