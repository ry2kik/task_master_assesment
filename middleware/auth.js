import jwt from "jsonwebtoken";
import User from '../Model/user.model.js'

const userAuth = async (req, res, next) => {
    try {
        let token = null;
        if (req.headers.authorization) {
            token = req.headers.authorization;
        }

        if (!token) return res.status(401).json({ message: 'Authenticaion required' });
        const decoded = jwt.verify(token, process.env.privateKey);
        const { _id } = decoded;
        const user = await User.findOne({ _id });
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'User in authenticating user: ', error });
    }
}

export default userAuth