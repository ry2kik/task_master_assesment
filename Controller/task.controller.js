import Task from "../Model/task.model";
import Team from "../Model/team.model";

export const createTask = async (req, res) => {
    try {
        const { title, description, dueDate, assignTo, team } = req.body;
        if (!title || !description || !dueDate || !assignTo || !team || title.trim == '' || description.trim == '' || dueDate.trim == '' || assignTo.trim == '' || team.trim == '') {
            return res.status(400).json({ message: 'All the fields should not be empty' });
        }

        const task = new Task({ title, description, dueDate });
        await task.save();
        return res.status(200).json({ message: "Task created successfully", task });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

export const createTeam = async (req, res) => {
    try {
        const { name, description, members } = req.body;
        if (!name || !description || !members || name.trim == '' || description.trim == '' || members.trim == '') {
            return res.status(400).json({ message: 'All the fields should not be empty' });
        }

        const team = new Team({ name, description, members });
        await team.save();
        return res.status(200).json({ message: `New team named ${ name } is added` });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

export const filterTask = async (req, res) => {
    try {
        
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

export const fetchTasks = async (req, res) => {
    try {

        return res.status(200).json({ message: "" });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

export const taskById = async (req, res) => {
    try {

        return res.status(200).json({ message: "" });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}
