const path = require('path');
const fs = require('fs');


module.exports = function(app) {
    app.get('/', (req,res) => res.sendFile(path.join(__dirname,'index.html')));
    
   
    app.get('/notes', (req,res) => res.sendFile(path.join(__dirname,'notes.html')));
        
        
    
};
    
    



