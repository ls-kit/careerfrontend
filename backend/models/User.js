const mongoose = require("mongoose");

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
        }
    },
    {
        timestamps: true
    }
)

const User = mongoose.model("User", userSchema);
module.exports = User;