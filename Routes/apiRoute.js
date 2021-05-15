const path = require('path');
const fs = require('fs');

module.exports = function(app) {

    app.get('/Routes/notes', (req,res) => {
        fs.readFile('./db/db.json', (err,data) => {
            if (err) throw err;
            dbData = JSON.parse(data);
            res.send(dbData);
    });

    app.post('/Routes/notes', (req,res) => {
        const Notes = req.body
        fs.readFile('./db/db.json', (err,data) => {
            if (err) throw err;
            dbData = JSON.parse(data);
            res.send(dbData);
    });

    
    

});}
