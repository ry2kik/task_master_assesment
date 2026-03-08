import bcrypt from 'bcrypt'
import { validateSignupData, validateProfileData } from '../utils/validate.js'
import User from '../Model/user.model.js'

export const signupController = async (req, res) => {
    try {
        // TODO Validate sign-up data
        validateSignupData(req);

        // TODO Extracting data from the req.body
        const { userName, email, password } = req.body;

        // TODO Finding if the email already in use or not
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already existed. Please login with another email' })
        }

        // TODO Making hash password
        const hashPass = await bcrypt.hash(password, 10);

        // TODO Updating DB with the new User
        const user = new User({ userName, email, password: hashPass })

        // TODO Saving the user to the DB
        await user.save()
        return res.status(200).json({ message: "New user added to the DB", user });
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

export const loginController = async (req, res) => {
    try {
        // TODO Extracting data from the req.body
        const { email, password } = req.body;
        
        // TODO Check valid email and password
        if (!email || !password) 
            return res.status(400).json({ message: "All fields required" });

        // TODO Finding if the email already in use or not
        const existingUser = await User.findOne({ email });
        if (!existingUser) 
            return res.status(400).json({ message: "User doesn't exist. Please register first" });

        // TODO Compare valid password 
        const isValidPassword = await bcrypt.compare(password, existingUser.password);
        if (isValidPassword) {
            const token = await existingUser.getJWT();
            return res.status(200).json({ token });
        } else {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

export const fetchProfile = async (req, res) => {
    try {
        // TODO Validate User Profile Data
        if (!validateProfileData(req)) {
            throw new Error("Invalid Edit request");
        }

        // TODO Editing the loggedin user's profile and saving it in DB
        const loggedUser = req.user;
        Object.keys(req.body).forEach(key => loggedUser[key] = req.body[key]);
        await loggedUser.save();

        res.status(200).json({ message: "You've successfully edited your profile", loggedUser });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

export const logoutController = async (req, res) => {
    try {
        const loggedUser = req.user;
        loggedUser.logoutTime = new Date();
        await loggedUser.save();
        return res.status(200).json({ message: 'You have successfully logged out' });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}