import Team from "../Model/team.model.js";

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

export const addMember = async (req, res) => {
    try {
        const teamId = req.params.id;
        const { id } = req.body;
        if (!teamId) {
            return res.status(400).json({ message: "Id not found" });
        }

        const team = await Team.findById(teamId);
        team.members.push(id);
        await team.save();

        return res.status(200).json({ message: "Team member added successfully" });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}