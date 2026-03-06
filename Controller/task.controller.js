import Task from "../Model/task.model";

export const createTask = async (req, res) => {
    try {
        const { title, description, dueDate } = req.body;
        if (!title || !description || !dueDate || title.trim == '' || description.trim == '' || dueDate.trim == '') {
            return res.status(400).json({ message: 'All the fields should not be empty' });
        }

        const task = await new Task({ title, description, dueDate })
        return res.status(200).json({ message: "Task created successfully", task });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

