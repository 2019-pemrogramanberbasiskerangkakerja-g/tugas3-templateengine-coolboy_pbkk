const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/getName', (req,res) => {
    var list = ["SIEZIL", "YUGZZZ", "DUGUN"];
    res.json(list);
    console.log('Sent list of items');
});
app.get('*', (req,res) =>{
    res.send("Wrong URL");
});

app.listen(5000);
console.log('App is listening on port ');