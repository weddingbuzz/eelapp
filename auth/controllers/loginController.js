// controllers/Post/index.js
const fetch = require("node-fetch");
const loginService = require("../services/loginService");

module.exports = {
    postLogin,
    postToken,
};

/**
 * @description Create a cord with the provided body
 * @param req {object} Express req object
 * @param res {object} Express res object
 * @returns {Promise<*>}
 */
async function postLogin(req, res) {
    try {
        // We only pass the body object, never the req object
        const postLogin = await loginService.postLogin(req.body);
        return res.send(postLogin);
    } catch (err) {
        res.status(500).send(err);
    }
}

/**
 * @description Create a cord with the provided body
 * @param req {object} Express req object
 * @param res {object} Express res object
 * @returns {Promise<*>}
 */
async function postToken(req, res) {
    try {
        // We only pass the body object, never the req object
        const postToken = await loginService.postToken(req.body);
        return res.send(postToken);
    } catch (err) {
        res.status(500).send(err);
    }
}
