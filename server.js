var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one':  {
        title: 'Article Uno | Chinmay K.',
        heading : 'Article Uno' ,
        date: '15 August 2017',
        content: 'This is article one'
    },
    'article-two':  {
        title: 'Article Dos | Chinmay K.',
        heading : 'Article Dos' ,
        date: '15 August 2017',
        content: 'This is article two'
    },
    'article-three':  {
        title: 'Article Tres | Chinmay K.',
        heading : 'Article Tres' ,
        date: '15 August 2017',
        content: 'This is article three'
    },
    
};
function createTemplate (data)
{
    var title= data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;

 var htmltemplate=` 
         <html>
            <head>
                <title>
                    ${title}
                </title>
                <style>
                    .container
                    {
                           max-width: 800px;
                             margin: 0 auto;
                            color: #1d1f1b;
                            font-family: sans-serif;
                            padding-top: 60px;
                            padding-left: 30px;
                            padding-right: 30px;
                    }
                </style>
            </head>
            <body>
                <div class="Container">
                <div>
                    <a href="/">HOMEBOY</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    <p>
                      ${content}
                    </p>
                </div>
                </div>
            </body>
            
        </html>`;
 
return htmltemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName',function(req, res){
    var articleName=req.params.articleName;
     res.send(createTemplate(articles[articleName]));
});
app.get('/article-two',function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three',function(req, res){
     res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
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
