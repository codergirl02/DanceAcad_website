const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

app.use('/static', express.static('static'))  // for serving static files
app.use(express.urlencoded())

// pug specific stuff
app.set('views engine', 'pug')                       
app.set('views',  path.join(__dirname, 'views')) 


// Endpoints
app.get("/", (req, res) =>{
    
    const params = {  }
    res.status(200).render('home.pug', params);
})

// Endpoint of contact
app.get("/contact", (req, res) =>{
    
    const params = {  }
    res.status(200).render('contact.pug', params);
})


app.listen(port, () =>{
    console.log(`This application started successfully on port  ${port}`)
});