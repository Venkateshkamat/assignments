const express = require('express');
const {Card} = require('./db');
const cors = require('cors');
const { createCard } = require('./inputValidation');

const app = express();


app.use(express.json());
app.use(cors());


app.get("/cards",async (req,res)=>{
    //get all cards logic
    const cards = await Card.find()
    res.json({
        cards
    })
})

app.post("/card",async (req,res)=>{
    //add card logic
    try{
        const payload = req.body;
        const safepayload = createCard.safeParse(payload)
        payload.interests = payload.interests[0].split(" ")
        console.log(payload.interests);
        
        if(safepayload.success){
            const card = new Card({
                name: payload.name,
                description: payload.description,
                links:payload.links,
                interests:payload.interests
        
                })
                await card.save()
        
                res.json({
                    msg:"Card Saved to db"
                })
        }
        else{
            res.json({
                msg:"Incorrect inputs"
            })
        }
        
    }
    catch(e){
        res.json({
            msg:"Error while saving data to db"
        })
   }

})

app.post("/deleteCard",async (req,res)=>{

    try{
        const id = req.body.id;
        await Card.findByIdAndDelete(id);
        res.json({
            msg:"deleted todo item"
        })
    }
    catch(e){
        res.json({
            msg:"Could not delete",
            e
        })
    }
    


})

//globla catch
app.use((err,req,res,next)=>{
    if(err){
        res.status(500).json({
            msg:"Caught by global catch",
            err
        })
    }
    next()
})

app.listen(3000,()=>{
    console.log("Listening on port 3000");
})