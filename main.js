var mcbwidth = document.body.clientWidth;
var mcbheight = document.body.clientHeight;

var empty,length,xhead,yhead,xapple,yapple,going,data,dx,index;

var canvas = document.getElementById('canvas');
canvas.width = mcbwidth;
canvas.height = mcbheight;
var ctx = canvas.getContext('2d');

var squaresize = 100; //in px

var xt = Math.floor(mcbwidth/squaresize);
var yt = Math.floor(mcbheight/squaresize);

var grid = new Array(xt).fill(null).map(() => new Array(yt).fill(null));
var items = new Array(xt).fill(null).map(() => new Array(yt).fill(0));
var xsnake = new Array(3).fill(-2);
var ysnake = new Array(3).fill(-2);

var startx = Math.floor(Math.random()*(xt-5))+4;
var starty = Math.floor(Math.random()*(yt-5))+4;

xsnake[0] = startx;
ysnake[0] = starty;
xsnake[1] = startx-1;
ysnake[1] = starty;
xsnake[2] = startx-2;
ysnake[2] = starty;

items[startx][starty] = 1;
items[startx-1][starty] = 2;
items[startx-2][starty] = 2;

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
      ctx.fillRect(1+squaresize*x,1+squaresize*y,squaresize-1,squaresize-1);
    });
  });
  console.log('rendered');
}
function analyze(){
  empty = 0;
  length = 0;
  grid.forEach(function(element,x){
    element.forEach(function(id,y){
      switch (items[x][y]) {
        case 0:
          empty++;
        break;
        case 1:
          length++;
          xhead=x;
          yhead=y;
        break;
        case 2:
          length++;
        break;
        case 3:
          xapple=x;
          yapple=y;
        break;
      }
    });
  });
  return [empty,length,xhead,yhead,xapple,yapple];
}
function spawnapple(){
  let x,y;
  if(analyze()[0]>0){
    let going = true;
    while(going){
      x=Math.floor(Math.random()*xt);
      y=Math.floor(Math.random()*yt);
      if(items[x][y] == 0){
        items[x][y] = 3;
        going=false;
      }
    }
  }
}
function move(d){
  data = analyze();
  length = data[1];
  xhead = data[2];
  yhead = data[3];

  render();
}

render();

console.log(data);
