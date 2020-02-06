var mcbwidth = document.body.clientWidth;
var mcbheight = document.body.clientHeight;

var canvas = document.getElementById('canvas');
canvas.width = mcbwidth;
canvas.height = mcbheight;
var ctx = canvas.getContext('2d');

var gridsizefactor = 20;

var xt = Math.floor(mcbwidth/gridsizefactor);
var yt = Math.floor(mcbheight/gridsizefactor);

var grid = new Array(xt).fill(new Array(yt).fill(0));
var items = new Array(xt).fill(new Array(yt).fill(0));

var length = 3;

var total = xt*yt;

items[10][10] = 1;

function render(){
  items.forEach(function(element,x){
    element.forEach(function(element,y){
      console.log(x,y);

    });
  });
}



render();
console.log(total);
