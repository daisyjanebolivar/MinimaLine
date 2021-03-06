var express = require('express');
var bcrypt = require('bcrypt');
var app = express();
var database = require('../config/database');
//var moment = require('moment');

//get data from account-info table
app.get('/account-info', (req,res) => {
    let sql = 'SELECT * FROM account_info';

    database.query(sql, (err, result) => {
        if (err) {
            res.status(400).send(err);
            return;
        }

        if (result.length) {
            res.json(result);
        }
        else res.json({});
    });
});

//to register user info in account_info table
app.post('/user-registration', async (req,res)=> {
    
    const {username,email,password}=req.body

    hashPass = await bcrypt.hash(password,10)
    console.log(password+'\n'+hashPass)

    database.query("INSERT INTO account_info (username, email, password) VALUES (?,?,?)", 
    [username, email, hashPass], 
    (err, result) => {
        if(!err)
            res.send(result)
        }
    )
    
});

//authentication for user-login
app.post('/user-login', async(req,res)=> {

    const {username,password}=req.body
    hashPass = await bcrypt.compare(password,hash)
    console.log(password+'\n'+hashPass)

    database.query("SELECT * FROM account_info WHERE username = ? AND password = ?", 
    [username, password], 
    (err, result) => {
        // if(err){
        //     err.send({message: "Wrong username and/or password!"});
        // } 
        if (result.length > 0 && hashPass) {
            //console.log("Username and Password: ")
            //console.log(result)
            res.send(result)
        }
        else {
            res.status(400).send({message: "Wrong username and/or password!"});
        }
    });
});

module.exports = app;