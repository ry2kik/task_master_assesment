import mongoose from "mongoose";
const Schema = mongoose.Schema;

const teamMemberSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    
    description: {
        type: String,
        required: true,
        trim: true
    },

    members: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
});

export default mongoose.model('Team', teamMemberSchema);