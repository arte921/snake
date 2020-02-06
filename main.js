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
var xsnake = new Array(xt*yt).fill(-2);
var ysnake = new Array(xt*yt).fill(-2);

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
function move(d,n){
  data = analyze();
  length = data[1];
  xhead = data[2];
  yhead = data[3];

  let i=0;
  while(i<n){
    xsnake.forEach((item, index) => {
      if(item >= 0 && index > 0){
        xsnake[index]=xsnake[index-1];
        ysnake[index]=xsnake[index-1];
        items[item][ysnake[index]] = 2;
      }else if(item >= 0){
        switch (d){
          case 'n':
           ysnake[0]=ysnake[0]-2;
          break;
          case 'e':
            xsnake[0]=xsnake[0]+1;
          break;
          case 's':
            ysnake[0]=ysnake[0]+1;
          break;
          case 'w':
            xsnake[0]=xsnake[0]-1;
          break;
        }
        items[item][ysnake[index]] = 1;
      }
    });
  }
}

function nextstep(){
  spawnapple();

  data = analyze();
  xhead = data[2];
  yhead = data[3];
  xapple = data[4];
  yapple = data[5];

  dx=xapple-xhead;
  dy=yapple-yhead;
console.log(dx,dy);
  if(Math.abs(dy)>Math.abs(dx)){
    if(dy>0){
      move('s');
    }else if(dy<0){
      move('n');
    }
  }else{
    if(dx>0){
      move('e');
    }else if(dx<0){
      move('w');
    }else{
      spawnapple();
    }
  }
  render();
}

nextstep();
window.setInterval(nextstep,200);
console.log(data);
