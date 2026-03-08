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
    dueDate: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        enum: ['open', 'completed'],
        default: 'open'
    },
    assignTo: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    team: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    }
});

export default mongoose.model('Task', taskSchema);