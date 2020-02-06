var mcbwidth = document.body.clientWidth;
var mcbheight = document.body.clientHeight;

var canvas = document.getElementById('canvas');
canvas.width = mcbwidth;
canvas.height = mcbheight;
var ctx = canvas.getContext('2d');

var squaresize = 20; //in px

var xt = Math.floor(mcbwidth/squaresize);
var yt = Math.floor(mcbheight/squaresize);



var grid = new Array(xt).fill(new Array(yt).fill(0));
var items = new Array(xt).fill(new Array(yt).fill(0));

var length = 3;

var total = xt*yt;

items[2][20] = 1;

function render(){
  grid.forEach(function(element,x){
    element.forEach(function(element,y){
      switch (items[x][y]) {
        case 0:
          ctx.fillStyle = 'rgb(0,0,0)';
        break;
        case 1:
          ctx.fillStyle = 'rgb(0,255,0)';
        break;
        case 2:
          ctx.fillStyle = 'rgb(0,255,128)';
        break;
        case 3:
          ctx.fillStyle = 'rgb(255,0,0)';
        break;
      }
      ctx.fillRect(squaresize*x,squaresize*y,squaresize,squaresize);
    });
  });
}



render();
console.log(total);
