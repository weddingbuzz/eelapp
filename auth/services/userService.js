// controllers/Post/index.js
const UserRepository = require("../repositories/userRepository");
const UserRepositoryInstance = new UserRepository();

module.exports = { createUser };

/**
 * @description Create a cord with the provided body
 * @param req {object} Express req object 
 * @param res {object} Express res object
 * @returns {Promise<*>}
 */
async function createUser(req, res) {
    try {
        // We only pass the body object, never the req object
        const createdCord = await UserRepositoryInstance.getUser(req.body);
        return res.send(createdCord);
    } catch (err) {
        return res.status(500).send(err);
    }
}

module.exports = { getUser };

/**
 * @description Create a cord with the provided body
 * @param req {object} Express req object 
 * @param res {object} Express res object
 * @returns {Promise<*>}
 */
async function getUser(emailorusername) {
    try {
        // We only pass the body object, never the req object
        const user = await UserRepositoryInstance.getUser(emailorusername);
        return user;
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
}