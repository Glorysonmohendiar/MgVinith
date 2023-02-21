let mongoose = require("mongoose");
let contactSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    rollno:{
        type:String,
        required: true
    },

    marks:{
        type:String,
        required: true,
    },
    gander:{type:String},
    phone:{type:String}
});
mongoose.pluralize(null);
const studentModel = mongoose.model("stuednt test", contactSchema);
module.exports = studentModel;