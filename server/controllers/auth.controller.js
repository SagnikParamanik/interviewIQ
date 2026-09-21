import User from "../models/user.model.js";
import genToken from "../config/token.js";

export const googleAuth = async (req, res) => {
    try {
        const { name, email } = req.body;

        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({
                name,
                email,
            });
        }

        // Generate JWT Token
        let token = await genToken(user._id);

        console.log("Generated Token:", token);
        console.log("User ID:", user._id);

        // Store token in cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: true, // true if using HTTPS in production
            sameSite: "none",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return res.status(200).json({
            success: true,
            user,
            token,
        });

    } catch (error) {
        console.error("Google Auth Error:", error);

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const logOut = async (req, res) => {
    try {
        res.clearCookie("token");

        return res.status(200).json({
            success: true,
            message: "Logout Successfully",
        });

    } catch (error) {
        console.error("Logout Error:", error);

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};