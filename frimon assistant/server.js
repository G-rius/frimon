const express = require('express');
const app = express();
const path = require('path');

const port = 4000;



app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'serverhome.html'));
});

app.get('/frimon.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'frimon.html'));
})

app.get('/main.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'main.html'));
})


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
