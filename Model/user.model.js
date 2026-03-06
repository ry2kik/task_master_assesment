import mongoose from "mongoose";
import jwt from 'jsonwebtoken'

const Schema = mongoose.Schema;
const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        trim: true
    },
    
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    password: {
        type: String,
        required: true,
        unique: true,
    }
});

userSchema.methods.getJWT = async function() {
    const token = jwt.sign({ _id: this._id }, process.env.privateKey, {
        expiresIn: '1h'
    })

    return token;
}

export default mongoose.model('User', userSchema);


