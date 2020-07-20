function drawcircuit(){
var canvas = document.getElementById('myCanvas');
canvas.style.visibility="hidden";
var ctx = canvas.getContext('2d');
var x=30,y=10,l1x=30,l1y=10,l2x=120,l2y=70;
var and=[],size=newarr.length,middle=parseInt(size/2),length=100,whitespace=4;
if(size>32){whitespace=1;}
var height=size*120+(size+1)*10;
ctx.canvas.height=height;
var l4x=260,l4y;
if(size%2==1){l4y=(height/2)-middle*2-middle*whitespace}
else{l4y=(height/2)-middle*2-(middle-1)*whitespace}
var orx=250,ory=(height/2)-100;
var l4y2=l4y;
if(size==1){height=140;x=ctx.canvas.width/2-45;l1x=ctx.canvas.width/2-45;l2x=ctx.canvas.width/2-45+90;length=30;l4x=120;}

for(var i=0;i<size;i++){
and.push("and.png");
}
var max=0;
ctx.font = "bold 16px Times New Roman";

for(var i=0;i<size;i++){
var num=_.without(resarray[i],"̅").length;
l1y+=Math.round(120/(num+1));
for(var j=0;j<resarray[i].length;j++){
if(resarray[i].charAt(j)!="̅"){

ctx.beginPath();
ctx.moveTo(l1x,l1y);
ctx.lineTo(l1x-15,l1y);
ctx.lineWidth=2;
ctx.stroke();
ctx.font = "bold 16px Times New Roman";
if(resarray[i].charAt(j+1)=="̅"){
var letter=complement[letters.indexOf(resarray[i].charAt(j))];
}
else{
var letter=resarray[i].charAt(j);
}
ctx.fillText(letter, l1x-30, l1y+5);
l1y+=Math.round(120/(num+1));
}}
l1y=10*(i+2)+120*(i+1);
var imageObj = new Image();
imageObj.onload = (function(value) {
return function(){
ctx.drawImage(this, x, (value*130)+y);
}})(i);
imageObj.src = and[i];

ctx.moveTo(l2x,l2y);
ctx.lineTo(l2x+length,l2y);
ctx.lineWidth=2;
ctx.stroke();

if(size>1){
var l2y2;
if(i<middle){l2y2=l2y-1;}
else{l2y2=l2y+1;}
ctx.moveTo(l2x+length+1,l2y2);
ctx.lineTo(l2x+length+1,l4y2);
ctx.lineWidth=2;
ctx.stroke();

ctx.moveTo(l2x+length,l4y2);
ctx.lineTo(l4x,l4y2);
ctx.lineWidth=2;
ctx.stroke();
l4y2+=2+whitespace;

if(i<middle-1){

length-=2+whitespace;
}
if(size%2==0){var increase=middle-1;}else{var increase=middle;}
if(i>increase){
length+=2+whitespace;
}
l2y+=130;
}}
if(size>1){
for(var i=0;i<size;i++){
ctx.moveTo(l4x+25,l4y);
ctx.lineTo(l4x-30,l4y);
ctx.lineWidth=2;
ctx.stroke();
l4y+=2+whitespace;
}
ctx.closePath();
ctx.globalCompositeOperation='destination-over';

var orimage = new Image();
orimage.onload=function() {
ctx.drawImage(this,orx,ory);}
orimage.src="or.png";
}
$(document.getElementsByTagName('canvas')[0]).ready(function() {
canvas.style.visibility="visible";
});
}