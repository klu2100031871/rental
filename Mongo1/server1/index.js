const express=require("express");
const mongoose=require("mongoose");
const HouseModel=require("./models/Info");
const app=express();
app.use(express.json());
mongoose.connect("mongodb+srv://klu-2100031871:Mohan%402004@cluster0.3vgvf63.mongodb.net/HouseRent?retryWrites=true&w=majority",
{useNewUrlParser: true, },()=>console.log("connected to DB")); 
//app.get('/gets',(req,res)=>res.json(StudData.find())) 
app.post("/newhouse",async(req,res)=>{
    const HouseType=req.body.HouseType;
    const HousePrice=req.body.HousePrice;
    const Months=req.body.Months;
    const house=new HouseModel({Type:HouseType,price:HousePrice,months:Months})
    try{
        await house.save();
        res.send("Inserted Values");}
        catch(Err){
            console.log(Err);
}});
app.get("/display",async(req,res)=>{
    HouseModel.find({},(err,result)=>{
        if(err){
            res.send(err);
        }
        res.json(result);
    });
});
    app.listen(3005,()=>console.log("Server Ready."))