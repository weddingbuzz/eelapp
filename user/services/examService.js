// services/examService.js

import Exam from "../models/exam.js";

export default { getActiveExams};

/**
 * @description Create a cord with the provided body
 * @param req {object} Express req object 
 * @param res {object} Express res object
 * @returns {Promise<*>}
 */
async function getActiveExams(school_id) {
    try {
        // We only pass the body object, never the req object
        const exams = await Exam.findAll({ where: { school_id: school_id, active: 1 } });
        return exams;
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
}
