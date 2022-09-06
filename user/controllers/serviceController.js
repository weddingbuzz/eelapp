// controllers/serviceController.js

import apicache from 'apicache';

export default { clearCache };

/**
 * @description Create a cord with the provided body
 * @param req {object} Express req object 
 * @param res {object} Express res object
 * @returns {Promise<*>}
 */
async function clearCache(req, res) {
    try {
        // We only pass the body object, never the req object
        var cleared = apicache.clear();
        return res.send(cleared);
    } catch (err) {
        res.status(500).send(err);
    }
}