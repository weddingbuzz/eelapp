// controllers/Post/index.js

import UserRepository from "../repositories/userRepository.js";
const UserRepositoryInstance = new UserRepository();
import User from "../models/user.js";

export default { createUser, getUser, getClassTeacherBySectionId };

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

/**
 * @description Create a cord with the provided body
 * @param req {object} Express req object 
 * @param res {object} Express res object
 * @returns {Promise<*>}
 */
async function getUser(userToCreate) {
    try {
        // We only pass the body object, never the req object
        const createdCord = await UserRepositoryInstance.getUser(userToCreate);
        return createdCord;
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
}


/**
 * @description Create a cord with the provided body
 * @param req {object} Express req object 
 * @param res {object} Express res object
 * @returns {Promise<*>}
 */
async function getClassTeacherBySectionId(section_id) {
    try {
        // We only pass the body object, never the req object
        const classTeacher = await User.findOne({ where: { section_id: section_id, role: 'teacher' } });
        return classTeacher;
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
}