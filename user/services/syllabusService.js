// services/examService.js
import Course from "../models/course.js";
import Syllabus from "../models/syllabus.js";
import NetCourseCoverage from "../models/net_course_coverage.js";
import { Op } from "sequelize";
import Teacher from "../models/teacher.js";

export default { getActiveSyllabus };

/**
 * @description Create a cord with the provided body
 * @param req {object} Express req object
 * @param res {object} Express res object
 * @returns {Promise<*>}
 */
async function getActiveSyllabus(school_id, class_id, session) {
  try {
    // We only pass the body object, never the req object
    const syllabuses = await Course.findAll({
      attributes: ["course_name"],
      where: { school_id: school_id, class_id: class_id, is_deleted: 0 },
      include: [
        {
          model: Teacher,
          attributes: ["name"],
        },
        {
          model: Syllabus,
          attributes: ["file_path"],
          active: {
            [Op.eq]: 1,
          },
        },
        {
          model: NetCourseCoverage,
          attributes: ["coverage"],
          session: {
            [Op.eq]: session,
          },
        },
      ],
    });
    return syllabuses;
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
}
