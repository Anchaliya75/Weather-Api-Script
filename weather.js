const request =require('request');// npm package to request an api packages
const dotenv = require('dotenv').config();// helps in making encrypt the API_KEY
const address = process.argv[2]//global hai ek ye 
const url =`https://api.openweathermap.org/data/2.5/weather?q=${address}&appid=${process.env.API_KEY}`
request(url, (error,response,body)=>{
   const data =JSON.parse(body);
   //console.log(data.main);
   console.log(data.main.temp);
})