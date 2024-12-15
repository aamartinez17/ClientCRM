const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

// Create Express app
const app = express();

// Setup middleware

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res)=>{
    console.log(" This is from our server");
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    // res.send("Profile")
})

app.get("/api", (req, res)=>{
    console.log(" This is /api");
    res.end("My api");
})

/* Assume that you have your mongoDB code */

const username = "Alex";
const password = 'Martinez';

app.post('/login', (req,res)=>{
    const {username: reqUserName, password: reqPassword } = req.body;
    if(reqUserName === username && reqPassword === password) {
        // go to main.html
        const clientData = req.body;
const dbFilePath = path.join(__dirname, 'src', 'components', 'db.json');
let existingData = fs.readFileSync(dbFilePath, 'utf-8');
    existingData = existingData ? JSON.parse(existingData): [];
    console.log(existingData);
    console.log(typeof(existingData));
        res.redirect('/main');
    } else{
        // invalud username and password
        res.status(401).send(' Invalid username or password')
    }
})

app.post('/update', (req, res) => {
    const clientData = req.body;
    const dbFilePath = path.join(__dirname, 'src', 'components', 'db.json');

    let existingData = fs.readFileSync(dbFilePath, 'utf-8');
    existingData = existingData ? JSON.parse(existingData): [];
    console.log(existingData);
    console.log(typeof(existingData));
    //check if client id exists
    const existingClient = existingData.Clients.find((client)=> client.name === clientData.name);

    if(existingClient){
        existingClient.Name = clientData.Name;
        existingClient.DOB = clientData.DOB;
        existingClient.SSN = clientData.SSN;
    }
    else {
        existingData.Clients.push(clientData);
    }
})


app.get('/main', (req, res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})

app.listen(3001);
