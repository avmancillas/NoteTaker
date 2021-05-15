const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 8000;



app.use(express.urlencoded ({extended:true}));
app.use(express.static(__dirname + 'public'));
app.use(express.json());






app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'notes.html'));
});


require("/Users/avi/Desktop/github/Week11/02-Homework/Routes/apiRoute.js")(app);
require("/Users/avi/Desktop/github/Week11/02-Homework/Routes/htmlRoute.js")(app);





//fs.readFile('/public/notes.html', (err,data) => {
    //if(err){
        //console.log(err);
    //}else{
        //res.setHeader('Content-Type', 'text/html' )
    //}
//})

app.listen(PORT, () => {
    console.log (`Sucessfull!: ${PORT}`);
});
