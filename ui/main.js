console.log('Loaded!');
alert("hello js");

///


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

///

var counter = 0;
var click = document.getElementById('click');

click.onclick = function(){
    var times = document.getElementById('times')
    counter = counter+1;
    times.innerHTML = counter.toString();
}

//////

var name1 = document.getElementById('name');
var name2 = name1.value;
var submit = document.getElementById('submit');
submit.onclick = function () {
     var names = ['name1','name2','name3','name4'];
     var list = '';
    for (var i=0; i< names.length; i++){
     
        list += '<li>'+ names[i] + '</li>';
        
}
    
    var Namelist = document.getElementById('NameList');
    Namelist.innerHTML = list;
};


var submit = document.GetElementById('submit_btn');
submit.onclick = function(){

var username = getElementById('username').value;
var password = getElementById('password').value;
console.log(username);
console.log(password);
request.open('POST','http://balapriyankasomasekaran.imad.hasura-app.io/login',true);
request.setRequestHeader('Content-Type',application/json);
request.send(JSON.stringify({username:username,password:pass}));
};

