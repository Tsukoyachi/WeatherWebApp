const express = require("express")
const bodyParser = require("body-parser")
const request = require('request');
const app = express()
const port = 3000

//Load secret from the dotenv file
require("dotenv").config()
const apiKey = process.env.API_KEY

app.set('view engine', 'ejs')
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",function (req,res) {
    res.render('index',
            {location:null, condition: null, iconUrl:null,tempC:null,tempF:null, 
                error: null})
})

app.post('/', function (req, res) {
    let location = req.body.location;
    let url = "http://api.weatherapi.com/v1/current.json?key="+apiKey+"&q="+location+"&aqi=no"
    request(url, function(err,response,body){
        if(err || response.statusCode !== 200){
            res.render('index',
            {location:null, condition: null, iconUrl:null,tempC:null,tempF:null, 
                error: "Error, please try again"})
        } else {
            let weather = JSON.parse(body)
            location = weather.location.name
            let condition = weather.current.condition.text
            let iconUrl = weather.current.condition.icon
            let tempC = weather.current.temp_c
            let tempF = weather.current.temp_f
            res.render('index',
            {location:location, condition: condition, iconUrl:iconUrl,tempC:tempC,tempF:tempF, 
                error: null})
        }
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})