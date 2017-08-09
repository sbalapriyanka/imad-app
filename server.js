var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var FirstOne = {
    title: 'My first article',
    content: `
    <ol>
    <li>i am happy to publish my first article</li>
    <li>i am happy to publish my first article</li><li>i am happy to publish my first article</li><li>i am happy to publish my first article</li><li>i am happy to publish my first article</li>
</ol>
</div>

<div>
    <p>
        i am happy to publish my first article.i am happy to publish my first article.i am happy to publish my first article.i am happy to publish my first article.i am happy to publish my first article.i am happy to publish my first article.i am happy to publish my first article.i am happy to publish my first article.
    </p>`
}

function createone (data)
{
    var title = data.title;
    var content = data.content;

var firsttemplate =`

<html>

<head>
<title>${title}</title>

<meta name="view port" content = "width = device-width,initial-scale=1" />
<link href="/ui/style.css" rel="stylesheet" />

</head>


<body>
<div class = "stylecontainer">
<div>

<a href="/" >Home</a>
</div>

<div>
<h2> My article one</h2>
${content}



</div>
</div>
</body>
</html>`
;
return firsttemplate;

}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});



app.get('/FirstOne', function (req, res) {
  res.send(createone(FirstOne));
});

var SecondOne = {
    title: 'My second article',
    content: `
    <p>
                i am happy to publish my second article.  i am happy to publish my second article.  i am happy to publish my second article.  i am happy to publish my second article.  i am happy to publish my second article.  i am happy to publish my second article.  i am happy to publish my second article.  i am happy to publish my second article. 
            </p> `
}
function createone2 (data1)
{
    var title = data1.title;
    var content = data1.content;

var firsttemplate2 =`
<html>

<head>
<title>${title}</title>
<meta name="view port" content = "width = device-width,initial-scale=1" />
<link href="/ui/style.css" rel="stylesheet" />

</head>


<body>
<div class = "stylecontainer">
<div>

<a href="/" >Home</a>
</div>

<div>
<h2> My article two</h2>
${content}



</div>
</div>
</body>
</html>`

return firsttemplate2;

}

app.get('/SecondOne', function (req, res) {
  res.send(createone2(SecondOne));
});

var ThirdOne = {
    title: 'My third article',
    content: `
    <p>
                i am happy to publish my third article. i am happy to publish my third article. i am happy to publish my third article. i am happy to publish my third article. i am happy to publish my third article. i am happy to publish my third article. i am happy to publish my third article. i am happy to publish my third article.
            </p>`
}


function createone3 (data)
{
    var title = data.title;
    var content = data.content;

var firsttemplate3 =`
<html>

<head>
<title>${title}</title>
<meta name="view port" content = "width = device-width,initial-scale=1" />
<link href="/ui/style.css" rel="stylesheet" />

</head>


<body>
<div class = "stylecontainer">
<div>

<a href="/" >Home</a>
</div>

<div>

<h2> My article three</h2>
${content}


</div>
</div>
</body>
</html>`

return firsttemplate3;

}

app.get('/ThirdOne', function (req, res) {
  res.send(createone3(ThirdOne));
});









app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
