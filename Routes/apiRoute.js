const path = require('path');
const fs = require('fs');


module.exports = function(app) {

    app.get('/Routes/notes', (req,res) => {
      const newNote = req.body;

        notes.push(newNote);
        res.json(newNote);
        
    });

};
