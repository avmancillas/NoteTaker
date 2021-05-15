const path = require('path');
const fs = require('fs');


module.exports = function(app) {
    app.get('/',(req, res) => {
        console.log(`app.get"/":  ${__dirname}`);
        res.sendFile(path.join(__dirname, 'public','assets','index.html'));
    });
    
    app.get('/notes', (req, res) => {
        console.log(`app.get"/notes": ${__dirname}`);
        res.sendFile(path.join(__dirname, 'public', 'assets','notes.html'));
    });
    
        
        
    
};
    
    



