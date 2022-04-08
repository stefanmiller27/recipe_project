const router = require("express").Router();
const usersModel = require("../users/users-model");
const {
    validateLoginPayload,
    validateRegisterPayload,
    usernameDoesNotExist,
    usernameExist
} = require("./auth-middleware");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./secrets");

router.post("/register", validateRegisterPayload, usernameDoesNotExist, async (req, res, next) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password);
        const [user_id] = await usersModel.insert(req.body);
        if (user_id) {
            res.status(201).json({
                user_id,
                username: req.body.username,
                message: "Congrats! Registered Successfully"
            })
        }
    }
    catch (err) {
        next(err);
    }
});

router.post("/login", validateLoginPayload, usernameExist, (req, res, next) => {
    try {
        const isValid = bcrypt.compareSync(req.body.password, req.user.password);

        if (isValid) {
            const { user_id, username, email } = req.user;
            const payload = {
                user_id,
                username,
                email
            };
            const options = {
                expiresIn: '1d', // show other available options in the library's documentation
            };
            const token = jwt.sign(payload, JWT_SECRET, options);
            res.status(200).json({
                user_id,
                username,
                token,
                message: "Success! You're In!"
            })
        }
        else {
            res.status(401).json({ message: "username or password incorrect" });
        }
    }
    catch (err) {
        next(err);
    }
});

module.exports = router;