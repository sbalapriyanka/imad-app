console.log('Loaded!');
alert("hello js");


var element1 = document.getElementById('dino');
var left = 0;
element1.onclick = function()
{
 element1.style.marginLeft = '100px';
 
 var left = left + 200;

};