const { body, header, validationResult } = require("express-validator");
const usersModel = require("../users/users-model");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./secrets");


const checkValidation = (status, message) => {
    return (req, res, next) => {
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            next();
        }
        else {
            const { msg } = errors.array()[0]
            res.status(status).json({ message: message || msg.message || msg });
        }
    };
};

const validateRegisterPayload = [
    body("username")
        .isString()
        .trim()
        .isLength({ min: 3 }),

    body("password")
        .isString()
        .trim()
        .isLength({ min: 10 }),

    body("email").isString().trim().isEmail(),

    checkValidation(400, "username, password, and email required")
];
const validateLoginPayload = [
    body("username")
        .isString()
        .trim()
        .isLength({ min: 3 }),

    body("password")
        .isString()
        .trim()
        .isLength({ min: 10 }),

    checkValidation(400, "username and password required")
];

const usernameMustNotExist = [
    body("username").custom((username) => {
        return usersModel.getByQuery({ username })
            .then((userFound) => {
                if (!userFound) {
                    return Promise.resolve();
                }
                else {
                    return Promise.reject({ message: "username taken" });
                }
            });
    }),
    checkValidation(400)
];

const usernameMustExist = [
    body("username").custom((username, { req }) => {
        return usersModel.getByQuery({ username })
            .then((userFound) => {
                if (userFound) {
                    req.user = userFound;
                    return Promise.resolve();
                }
                else {
                    return Promise.reject({ message: "username not found" });
                }
            });
    }),
    checkValidation(404)
];

const restricted = [
    header("Authorization").isString().withMessage("token missing").custom((token, { req }) => {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.decoded = decoded;
        return true;
    }).withMessage("invalid token"),
    checkValidation(401)
];

module.exports = {
    validateLoginPayload,
    validateRegisterPayload,
    usernameMustNotExist,
    usernameMustExist,
    restricted
};