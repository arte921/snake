var mcbwidth = document.body.clientWidth;
var mcbheight = document.body.clientHeight;

var empty,length,xhead,yhead,xapple,yapple,going,data,dx;

var canvas = document.getElementById('canvas');
canvas.width = mcbwidth;
canvas.height = mcbheight;
var ctx = canvas.getContext('2d');

var squaresize = 50; //in px

var xt = Math.floor(mcbwidth/squaresize);
var yt = Math.floor(mcbheight/squaresize);

var grid = new Array(xt).fill(null).map(() => new Array(yt).fill(null));
var items = new Array(xt).fill(null).map(() => new Array(yt).fill(0));

items[1][2] = 1;

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
  switch (d){
    case 'n':

    break;
    case 'e':

    break;
    case 's':

    break;
    case 'w':

    break;
  }
}

spawnapple();
render();

data = analyze();
xhead = data[2];
yhead = data[3];
xapple = data[4];
yapple = data[5];

dx=Math.abs(xhead-xapple);
dy=Math.abs(yhead-yapple);

if(dy>dx){

}else{

}

if(xhead-xapple < 0){

}else if(xhead-xapple > 0){

}

console.log(data);
