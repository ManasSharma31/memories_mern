
import bycrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.js'


export const signIn = async (req, res) => {

    const { email, password } = req.body;
    try {

        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.json({ status: "error", message: "User doesn't Exist." });
        }
        const isPasswordCorrect = await bycrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.json({ status: "error", message: "Password is incorrect. " })
        }
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.SECRET_KEY, { expiresIn: "1hr" });
        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        res.status(500).json({ message: "Semething went wrong" });
    }



}
export const signUp = async (req, res) => {
    const { email, password, cpassword, lastName, firstName } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser)
            return res.json({ status: "error", message: "User already exist ." });

        if (password !== cpassword) {
            return res.json({ status: "error", message: "Password doesn't match ." });
        }

        const hashedPassword = await bycrypt.hash(password, 12);
        const user = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

        const token = jwt.sign({ email: user.email, id: user._id }, process.env.SECRET_KEY, { expiresIn: "1hr" });

        res.status(200).json({
            result: user,
            token
        });
    } catch (error) {
        res.status(500).json({ message: "Semething went wrong" });

    }
}