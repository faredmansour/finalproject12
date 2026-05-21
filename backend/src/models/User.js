const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true,
        },

        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true

        },

        password:{
            type:String,
            required:true,
            minlength:6,
        },

        role:{
            type:String,
            enum:["student","teacher","admin"],
            default:"student",
        },

        School:{
            type:String,
        
        },
        points:{
            type:Number,
            default:0,
        },
        grade:{
            type:Number,
            
        },
        governorate:{
            type:String,
        },

    },
{
    timestamps:true,
}
)
module.exports = mongoose.model("User",UserSchema)