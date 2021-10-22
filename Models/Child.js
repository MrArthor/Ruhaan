const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChildSchema = new Schema({
    ChildName: String,
    Location: Number,
    Interests: String,
    Age: Number,

})
module.exports = mongoose.model("Child", ChildSchema);