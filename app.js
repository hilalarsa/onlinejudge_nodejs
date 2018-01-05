var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/page_get.htm', function(req,res)
{
  res.sendFile(__dirname + "/" + "page_get.htm");
})

// app.get('/', function(req,res)
// {
//   console.log("Got a GET request for homepage");
//   res.send('Hello GET!');
// })

// app.post('/', function(req,res)
// {
//   console.log("Got a POST request from homepage");
//   res.send('Hello POST!');
// })

app.delete('/del_user', function(req,res)
{
  console.log("Got a DELETE request for /del_user page");
  res.send('Hello DELETE!');
})

app.get('/list_user',function(req,res)
{
  console.log("Got a GET request for /list_user page");
  res.send('Page listing');
})

app.get('/ab*cd',function(req,res)
{
  console.log("Got a GET request for /ab*cd page");
  res.send('Page pattern match');
})

app.get('/page_get',function(req,res)
{
  console.log("Got a GET request for /page_get page");
  // res.send('Page pattern match');
  response = {
    first_name:req.query.first_name,
    last_name:req.query.last_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
})

app.get('/', function(req, res){
  res.render('index', {
    title: 'Home'
  });
});

app.get('/about', function(req, res){
  res.render('about', {
    title: 'About'
  });
});

app.get('/contact', function(req, res){
  res.render('contact', {
    title: 'Contact'
  }) ;
});
app.listen(3000);
// var server = app.listen(3000, function()
// {
//   var host = server.address().address
//   var port = server.address().port
//   console.log("Example app listening at http//%s%s",host,port);
// })

// var express   =    require("express");
// var mysql     =    require('mysql');
// var app       =    express();

// var pool      =    mysql.createPool({
//     connectionLimit : 100, //important
//     host     : 'localhost',
//     user     : 'root',
//     password : '',
//     database : 'online_judge',
//     debug    :  false
// });


// function handle_database(req,res) {

//     pool.getConnection(function(err,connection){
//         if (err) {
//           res.json({"code" : 100, "status" : "Error in connection database"});
//           return;
//         }  

//         console.log('connected as id ' + connection.threadId);

//         connection.query("select * from mahasiswa",function(err,rows){
//             connection.release();
//             if(!err) {
//                 res.json(rows);
//             }          
//         });

//         connection.on('error', function(err) {      
//               res.json({"code" : 100, "status" : "Error in connection database"});
//               return;    
//         });
//   });
// }

// app.get("/",function(req,res){
//         handle_database(req,res);
// });

// app.listen(3000);

// var http = require('http');
// var formidable = require('formidable');
// var fs = require('fs');

// http.createServer(function (req, res) {
//   if (req.url == '/fileupload') {
//     var form = new formidable.IncomingForm();
//     form.parse(req, function (err, fields, files) {
//       var oldpath = files.filetoupload.path;
//       var newpath = 'D:/node/' + files.filetoupload.name;
//       console.log(newpath);
//       fs.rename(oldpath, newpath, function (err) {
//         if (err) throw err;
//         res.write('File uploaded and moved!');
//         res.end();
//       });
//  });
//   } else {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//     res.write('<input type="file" name="filetoupload"><br>');
//     res.write('<input type="submit">');
//     res.write('</form>');
//     return res.end();
//   }
// }).listen(3000);
