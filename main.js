var mcbwidth = document.body.clientWidth;
var mcbheight = document.body.clientHeight;

var canvas = document.getElementById('canvas');
canvas.width = mcbwidth;
canvas.height = mcbheight;
var ctx = canvas.getContext('2d');

var squaresize = 50; //in px

var xt = Math.floor(mcbwidth/squaresize);
var yt = Math.floor(mcbheight/squaresize);
var total = xt*yt;

var grid = new Array(xt).fill(null).map(() => new Array(yt).fill(null));
console.log(grid);
var items = new Array(xt).fill(null).map(() => new Array(yt).fill(0));

var snakelength = 3;
items[2][2] = 1;

console.log(items);
function render(){
  ctx.clearRect(0,0,mcbwidth,mcbheight);
  grid.forEach(function(element,x){
    element.forEach(function(id,y){
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
