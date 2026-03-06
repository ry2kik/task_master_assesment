import validator from 'validator'

const validateSignupData = (req) => {
    const { userName, email, password } = req.body;
    if (!userName || !email || !password) {
        throw new Error('All the fields must be filled')
    }

    if (!validator.isEmail(email)) throw new Error("Not a valid email");
    if (!validator.isStrongPassword(password)) throw new Error("Not a strong password");
}

export default validateSignupData;