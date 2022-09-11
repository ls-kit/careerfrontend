const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true
        },
        roles: [
            {
                type: String,
                default: "Participant"
            }
        ],
        active: {
            type: Boolean,
            default: true
        },
        details: {
            fullname: {
                type: String,
                required: true
            },
            phone: {
                type: Number,
                required: true
            },
            division: {
                type: String,
                required: true
            },
            district: {
                type: String,
                required: true
            },
            upazila: {
                type: String,
                required: true
            },
            level: {
                type: String,
                required: true
            },
        },
    },
    {
        timestamps: true
    }
);

userSchema.plugin(AutoIncrement, {
    inc_field: 'ticket',
    id: 'tickedNums',
    start_seq: 500
})

const User = mongoose.model("User", userSchema);
module.exports = User;