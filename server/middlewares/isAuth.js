import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
    try {
        console.log("Cookies:", req.cookies);

        const { token } = req.cookies;

        console.log("Token:", token);

        if (!token || token === "undefined") {
            return res.status(401).json({
                message: "No valid token found"
            });
        }

        const verifyToken = jwt.verify(token, process.env.JWT_SECRET);

        console.log("Decoded:", verifyToken);

        req.userId = verifyToken.userId;

        next();

    } catch (error) {
        console.log(error);

        return res.status(401).json({
            message: error.message
        });
    }
}

export default isAuth;