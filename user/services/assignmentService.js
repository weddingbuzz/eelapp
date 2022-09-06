// services/examService.js

import Assignment from "../models/assignment.js";
import AssignmentsSubmitted from "../models/assignments_submitted.js";

export default { getActiveAssignments, postAssignment };

/**
 * @description Create a cord with the provided body
 * @param req {object} Express req object
 * @param res {object} Express res object
 * @returns {Promise<*>}
 */
async function getActiveAssignments(school_id, class_id) {
    try {
        // We only pass the body object, never the req object
        const assignments = await Assignment.findAll({
            where: { school_id: school_id, class_id: class_id, active: 1 },
        });
        return assignments;
    } catch (err) {
        return err;
    }
}

/**
 * @description Post assignment
 * @param req {object} Express req object
 * @param res {object} Express res object
 * @returns {Promise<*>}
 */
async function postAssignment(req, res) {
    try {
        let assignmentData = {
            assignment_id: req.body.assignment_id,
            file_path: req.file.location,
            user_id: req.body.user_id,
            marks: ''
        };
        var posted = await AssignmentsSubmitted.create(assignmentData);
        if(posted){
            return true;
        }
        return false;
    } catch (err) {
        return false;
    }
}
