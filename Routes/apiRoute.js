const path = require('path');
const fs = require('fs');

module.exports = function(app) {
    app.get('/notes', (req,res) => res.sendFile(path.join(__dirname,'notes.html')));

    //fs.readFile('/notes', (err,data) => {
    //if(err){
        //console.log(err);
    //}else{
        //res.setHeader('Content-Type', 'text/html' )
    //}
    
    

};
