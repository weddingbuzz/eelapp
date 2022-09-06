// services/examService.js

import Event from "../models/event.js";

export default { getActiveEvents };

/**
 * @description Create a cord with the provided body
 * @param req {object} Express req object 
 * @param res {object} Express res object
 * @returns {Promise<*>}
 */
async function getActiveEvents(school_id) {
    try {
        // We only pass the body object, never the req object
        const events = await Event.findAll({ where: { school_id: school_id, active: 1 } });
        return events;
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
}
