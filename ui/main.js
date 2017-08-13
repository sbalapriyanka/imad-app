console.log('Loaded!');
alert("hello js");




var leftmargin = 0;
var element = document.getElementById('dino');
function move(){
    leftmargin = leftmargin +10;
 element.style.marginLeft = leftmargin + 'px';
}

clearInterval(element);
element.onclick = function(){
    var position = setInterval(move,300);
};


var counter = 0;
var click = document.getElementById('click');
click.onclick = function(){
    counter = counter+1;
    click.INNERHTML = counter;
}