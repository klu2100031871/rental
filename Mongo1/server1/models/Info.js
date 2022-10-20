const mongoose=require("mongoose");
const HouseSchema=mongoose.Schema({
    HouseType:{
        type:String,
        required:true},
        price:{
            type:Number,
            required:true
        },
        months:{
            type:Number,
            required:true
        },
});
const House=mongoose.model("HouseData",HouseSchema);
module.exports=House;