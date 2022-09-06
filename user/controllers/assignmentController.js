// controllers/assignmentController.js
import assignmentService from "../services/assignmentService.js";

export default { getMyAssignments, postAssignment };

/**
 * @description Get dashboard items
 * @param req {object} Express req object
 * @param res {object} Express res object
 * @returns {Promise<*>}
 */
async function getMyAssignments(req, res) {
    try {
        // We only pass the body object, never the req object
        let assignments = await assignmentService.getActiveAssignments(
            req.params.school_id,
            req.params.class_id
        );
        const response = [
            {
                assignments: assignments,
            },
        ];
        var jsonData = {
            message: "success",
            status: 200,
            data: response,
        };
        res.send(jsonData);
    } catch (err) {
        res.status(500).send(err);
    }
}

/**
 * @description Post assignments
 * @param req {object} Express req object
 * @param res {object} Express res object
 * @returns {Promise<*>}
 */
async function postAssignment(req, res) {
    {
        try {
            let posted = await assignmentService.postAssignment(req);
            if (posted) {
                var jsonData = {
                    message: "successfully submitted the assignment",
                    status: 200,
                };
                res.status(200).send(jsonData);
            } else {
                var jsonData = {
                    message: "assignment submission failed",
                    status: 500,
                };
                res.status(500).send(jsonData);
            }
        } catch (err) {
            res.status(500).send(err);
        }
    }
}
