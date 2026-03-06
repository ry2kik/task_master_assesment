import mongoose from "mongoose"
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    dueData: {
        type: String,
        required: true,
        trim: true
    }
});

export default mongoose.model('Task', taskSchema);