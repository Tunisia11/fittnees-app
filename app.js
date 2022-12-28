const express = require('express')
const app = express()
const PORT = process.env.PORT || 3030;
const nodemailer= require('nodemailer')
const ejs = require('ejs')
const request = require('request')
const axios = require("axios");



app.set('view engine','ejs')

app.get('/', (req, res) => {
 
const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': '0fe48ea526msh515fbb5149f50edp17d2c6jsn6e58a9a9e7ca',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
      let Data = response.data;
      res.render('index',{Data})
  }).catch(function (error) {
      console.error(error);
  });

})
app.get('/ex_list/:id',(req,res)=>{
    let bodyPartName =req.params.id ;
    const options = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/'+bodyPartName,
        headers: {
          'X-RapidAPI-Key': '0fe48ea526msh515fbb5149f50edp17d2c6jsn6e58a9a9e7ca',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
        let Data = response.data;
        res.render('ex_list',{bodyPartName,Data})
      }).catch(function (error) {
          console.error(error);
      });
})


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
