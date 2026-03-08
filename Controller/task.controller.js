import Task from "../Model/task.model.js";

export const createTask = async (req, res) => {
    try {
        const { title, description, dueDate, assignTo, team } = req.body;
        if (!title || !description || !dueDate || !assignTo || !team || title.trim == '' || description.trim == '' || dueDate.trim == '' || assignTo.trim == '' || team.trim == '') {
            return res.status(400).json({ message: 'All the fields should not be empty' });
        }

        const task = new Task({ title, description, dueDate, assignTo, team });
        await task.save();
        return res.status(200).json({ message: "Task created successfully", task });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

export const filterTaskByStatus = async (req, res) => {
    try {
        const { status } = req.query;
        if (!status || status.trim == '') {
            return res.status(400).json({ message: 'Status query parameter is required' });
        }

        const tasks = await Task.find({ status: status })
        return res.status(200).json({ message: 'Tasks fetched successfully.', tasks })
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

export const searchTasks = async (req, res) => {
    try {
        const { search } = req.query;
        if (!search || search.trim == '') {
            return res.status(400).json({ message: 'Search query parameter is required' });
        }

        const tasks = await Task.find({ title: search })
        return res.status(200).json({ message: 'Tasks fetched successfully.', tasks })
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

export const changeStatus = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id || id.trim == '') {
            return res.status(400).json({ message: 'Invalid task ID' });
        }

        const task = await Task.findById(id);
        task.status = 'completed';
        await task.save();
        return res.status(200).json({ message: 'Task status changed successfully', task });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

export const getTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id || id.trim == '') {
            return res.status(400).json({ message: 'Invalid task ID' });
        }

        const task = await Task.find({ assignTo: id })
        return res.status(200).json({ message: "All the tasks assigned to you fetched successfully", task });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

export const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id || id.trim == '') {
            return res.status(400).json({ message: 'Invalid task ID' });
        }

        const task = await Task.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        return res.status(200).json({ message: 'Task updated successfully', task });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id || id.trim == '') {
            return res.status(400).json({ message: 'Invalid task ID' });
        }

        await Task.findByIdAndDelete(id);
        return res.status(200).json({ message: 'Task Deleted' });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

export const assignTask = async (req, res) => {
    try {
        const { id } = req.body;
        const { taskId } = req.params;

        if (!id || id.trim == '') {
            return res.status(400).json({ message: 'Invalid task ID' });
        }

        if (!taskId || taskId.trim == '') {
            return res.status(400).json({ message: 'Task not found' });
        }

        const task = await Task.findById(id);
        task.assignTo = id;
        await task.save();

        return res.status(200).json({ message: "Task assigned successfully", task });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}