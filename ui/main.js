console.log('Loaded!');
alert("hello js");




var leftmargin = 0;
var element = document.getElementById('dino');
function move(){
    leftmargin = leftmargin +10;
 element.style.marginLeft = leftmargin + 'px';
}

if(leftmargin > 150 )
{
    
}
element.onclick = function(){
    var position = setInterval(move,300);
};