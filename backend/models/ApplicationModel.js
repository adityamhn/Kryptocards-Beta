const mongoose =require('mongoose');
const Schema = mongoose.Schema;




const ApplicationModelSchema = new Schema({
    name : {
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    email : {
        type:String,
        required:true,
        match : /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    CV:{
        type:String,
        required:false,

    },
    position:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:false,
        maxlength:100,
        minLength:10
    }
});


const ApplicationModel = new mongoose.model("AppicationModel",ApplicationModelSchema);


module.exports = ApplicationModel;