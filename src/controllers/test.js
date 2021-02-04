const { validationResult } = require("express-validator");

const getUsers = require("../helpers/getUsers");

const getTest = async (req, res, next) => {
    const queries = req.query;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(422).json({
            success: false,
            errors: errors.array(),
        });
    }

    res.status(202).send(queries);
};

const getTestApi = async (req, res, next) => {
    try {
        const { status, data: users } = await getUsers();

        if (status === 200) {
            res.status(202).send(users);
        } else {
            res.status(404).send("Error: Api getUser");
        }
    } catch (error) {
        res.status(404).send(error);
    }
};

module.exports = {
    getTest,
    getTestApi,
};
