const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const ContactFormModelSchema = new Schema({
    name : {
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        match : /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    phoneNumber : {
        type:Number,
        required:true,
    },
    message : {
        type:String,
        required:true
    },
    timeSent : {
        type:Date,
        required:true,
        default:Date.now()
    }



})


const ContactFormModel = new mongoose.model('ContactFormModel', ContactFormModelSchema);

module.exports = ContactFormModel;