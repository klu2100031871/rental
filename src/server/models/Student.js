const mongoose=require("mongoose");
const StudentSchema=mongoose.Schema({
    name:{
        type:String,
        required:true},
        htno:{
            type:Number,
            required:true
        }

});
const Student=mongoose.model("HomeData",StudentSchema);
module.exports=Student;