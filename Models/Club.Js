const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClubSchema = new Schema({
    ClubName: String,
    PhoneNumber: Number,
    Description: String,
    Email: {
        type: String,
        required: true,
        unique: true
    },
    EventDetails: String,
    // username: String,

})
ClubSchema.plugin(PassportLocalMongoose);

module.exports = mongoose.model("Club", ClubSchema);