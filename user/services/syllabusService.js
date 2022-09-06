// services/examService.js

import Syllabus from "../models/syllabus.js";

export default { getActiveSyllabus };

/**
 * @description Create a cord with the provided body
 * @param req {object} Express req object 
 * @param res {object} Express res object
 * @returns {Promise<*>}
 */
async function getActiveSyllabus(school_id, class_id) {
    try {
        // We only pass the body object, never the req object
        const syllabuses = await Syllabus.findAll({ where: { school_id: school_id, class_id: class_id, active: 1 } });
        return syllabuses;
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
}
