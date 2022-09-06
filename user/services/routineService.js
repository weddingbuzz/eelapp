// services/examService.js

import Routine from "../models/routine.js";

export default { getActiveRoutines };

/**
 * @description Create a cord with the provided body
 * @param req {object} Express req object 
 * @param res {object} Express res object
 * @returns {Promise<*>}
 */
async function getActiveRoutines(school_id) {
    try {
        // We only pass the body object, never the req object
        const routines = await Routine.findAll({ where: { school_id: school_id, active: 1 } });
        return routines;
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
}
