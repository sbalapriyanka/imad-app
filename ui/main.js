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

////////////////////////////////////////////////////////////////////
//submit username and password to login


var submit = document.getElementById('submit_btn');
submit.onclick = function(){


//create a request object
var request = new XMLHttpRequest(); 

//capture the response and store in variable 

request.onreadystatechange = function(){
    if(request.readyState === XMLHttpRequest.DONE){
        //TAKE AACTION
        if(request.status === 200){
        alert('login success');
    }
        else if(request.status===403){
        alert('login/password is incorrect');
        }
        else if(request.status === 500)
        {
            alert('internal server error');
        }
    }
};

//extract user name and password
var username = document.getElementById('username').value;
var password = document.getElementById('password').value;
console.log(username);
console.log(password);
request.open('POST','http://balapriyankasomasekaran.imad.hasura-app.io/login',true);
request.setRequestHeader('Content-Type','application/json');
request.send(JSON.stringify({username: username, password: password}));
};

