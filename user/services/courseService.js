// services/examService.js

import Course from '../models/course.js'
import Teacher from '../models/teacher.js';

export default { getCourses };

/**
 * @description Create a cord with the provided body
 * @param req {object} Express req object 
 * @param res {object} Express res object
 * @returns {Promise<*>}
 */
async function getCourses(school_id = 0, section_id = 0, teacher_id = 0) {
    try {
        // We only pass the body object, never the req object
        let whereStatement = {};
        if (parseInt(school_id)) {
            whereStatement.school_id = school_id;
        }
        if (parseInt(section_id)) {
            whereStatement.section_id = section_id;
        }
        if (parseInt(teacher_id)) {
            whereStatement.teacher_id = teacher_id;
        }
        const courses = await Course.findAll({
            where: whereStatement, include: [
                {
                    model: Teacher,
                    required: true,
                }
            ],
        });
        return courses;
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
}
