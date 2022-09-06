// controllers/courseController.js
import courseService from "../services/courseService.js";

export default {
    getMyCourses
};


/**
 * @description Get dashboard items
 * @param req {object} Express req object
 * @param res {object} Express res object
 * @returns {Promise<*>}
 */
async function getMyCourses(req, res) {
    try {
        // We only pass the body object, never the req object
        console.log(req.params.teacher_id)
        let courses = await courseService.getCourses(
            0, req.params.section_id, req.params.teacher_id,
        );

        const response = [
            {
                courses: courses
            }
        ];
        var jsonData = {
            success: true,
            message: "success",
            status: 200,
            data: response,
        };
        res.send(jsonData);
    } catch (err) {
        res.status(500).send(err);
    }
}
