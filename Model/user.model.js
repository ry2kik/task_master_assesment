import mongoose from "mongoose";
import validator from 'validator';
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
    },

    age: {
        type: Number
    },

    gender: {
        type: String,
        enum: ['male', 'female', 'others'],
        validate(value) {
            if (!['male', 'female', 'others'].includes(value)) {
                throw new Error("Gender data is not valid");
            }
        }
    },

    about: {
        type: String,
        default:  'This is a default about of the user!'
    },
    
    avaterUrl: {
        type: String,
        vaidate(value) {
            if (!validator.isURL(value)) {
                throw new Error("Not a valid URL");
            }
        }
    }
});

userSchema.methods.getJWT = async function() {
    const token = jwt.sign({ _id: this._id }, process.env.privateKey, {
        expiresIn: '1h'
    })

    return token;
}

export default mongoose.model('User', userSchema);


