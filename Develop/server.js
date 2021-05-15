const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 8000;



app.use(express.urlencoded ({extended:true}));
app.use(express.static(__dirname + 'public'));
app.use(express.json());



app.get('/',(req, res) => {
    console.log(`app.get"/":  ${__dirname}`);
    res.sendFile(path.join(__dirname, 'public','assets','index.html'));
});

app.get('/notes', (req, res) => {
    console.log(`app.get"/notes": ${__dirname}`);
    res.sendFile(path.join(__dirname, 'public', 'assets','notes.html'));
});




app.listen(PORT, () => {
    console.log (`Sucessfull!: ${PORT}`);
});
