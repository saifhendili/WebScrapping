const express= require('express');
const got =require('got')
const cheerio=require ('cheerio')
const app=express()
const PORT =process.env.PORT||4000;
const bodyParser=require('body-parser');
const urlencodedparser=bodyParser.urlencoded({ extended:false});

app.get('/',urlencodedparser ,async(req,res)=>{
    let url="https://www.imdb.com/title/tt0903747/";

    await (async ()=>{
        const response = await got(url)
        const $=cheerio.load(response.body);
        let title =$('h1').html();
        let value =$('span[class="test"]').html()
     
        res.status(200).send(title) 
      
    })()
   
   
})

app.listen(4000,()=>{
    console.log("app Running"+4000)
})