// services/examService.js

import Notice from "../models/notice.js";

export default { getActiveNotices};

/**
 * @description Create a cord with the provided body
 * @param req {object} Express req object 
 * @param res {object} Express res object
 * @returns {Promise<*>}
 */
async function getActiveNotices(school_id) {
    try {
        // We only pass the body object, never the req object
        const notices = await Notice.findAll({ where: { school_id: school_id, active: 1 } });
        return notices;
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
}
