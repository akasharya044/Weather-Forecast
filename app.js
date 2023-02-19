const express = require('express');
const app = express();
const https = require('https');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))


app.get("/" , function(req , res){
    res.sendFile(__dirname + "/weather.html" );
});

app.post("/" , function(req, res) {
    const query = req.body.city
    const apiKey = "a7a94451936e53eab2b367dd1d67477c" 
    const url = "https://api.openweathermap.org/data/2.5/forecast?q="+query+"&appid="+apiKey+"&units=metric"
    https.get(url , function (response )
    {

            response.on('data', function (data){
                const weatherData =JSON.parse(data);
                const temp = weatherData.list[0].main.temp 
                const temp1 = weatherData.list[1].main.temp
                const temp2 = weatherData.list[2].main.temp
                const temp3 = weatherData.list[3].main.temp
                const temp4 = weatherData.list[4].main.temp
                const temp5 = weatherData.list[5].main.temp
                const temp6 = weatherData.list[6].main.temp
                const date = weatherData.list[0].dt_txt
                const date1 = weatherData.list[1].dt_txt
                const date2 = weatherData.list[2].dt_txt
                const date3 = weatherData.list[3].dt_txt
                const date4 = weatherData.list[4].dt_txt
                const date5 = weatherData.list[5].dt_txt
                const date6 = weatherData.list[6].dt_txt

            //const weatherDes = weatherData.weather[0].description;
            //const icon = weatherData.weather[0].icon;
                //const imageUrl = "http://openweathermap.org/img/wn/"+icon+"@2x.png"
                
                res.write("<h1> Current Weather of Date "+date+"         "+ query + "  is  "+temp+ " degree Celsius.</h1>");
                res.write("<h2> Weather of Date " + date1 + "         " + query + "  is  " + temp1 + " degree Celsius.</h1>");
                res.write("<h3> Weather of Date " + date2 + "         " + query + "  is  " + temp2 + " degree Celsius.</h1>");
                res.write("<h4> Weather of Date " + date3 + "         " + query + "  is  " + temp3 + " degree Celsius.</h1>");
                res.write("<h5> Weather of Date " + date4 + "         " + query + "  is  " + temp4 + " degree Celsius.</h1>");
                res.write("<h6> Weather of Date " + date5 + "         " + query + "  is  " + temp5 + " degree Celsius.</h1>");
                res.write("<h6> Weather of Date " + date6 + "         " + query + "  is  " + temp6 + " degree Celsius.</h1>");
              
               // res.write("<img src="+imageUrl+">")
                res.send();

            


            } )
    })
    

})


app.listen(3000 , function() {
    console.log('listening on port 3000');
});





