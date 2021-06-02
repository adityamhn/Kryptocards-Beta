const mongoose =require('mongoose');
const Schema = mongoose.Schema;




const NewsletterEmailSchema = new Schema({
    email:{
        type:String,
        required:true,
        match : /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
});

const NewsletterEmailModel = new mongoose.model("NewsletterEmailModel",NewsletterEmailSchema);


module.exports = NewsletterEmailModel;