// controllers/homeController.js
import config from "../config/menu.js";
import User from "../models/user.js";
import helper from "../helper/helper.js";
import userService from "../services/userService.js";
import examService from "../services/examService.js";
import noticeService from "../services/noticeService.js";
import courseService from "../services/courseService.js";
import syllabusService from "../services/syllabusService.js";
import assignmentService from "../services/assignmentService.js";
import eventService from "../services/eventService.js";
import MyClass from "../models/myClass.js";
import Section from "../models/section.js";
import School from "../models/school.js";

export default {
    getMenu,
    getDashboard,
};

/**
 * @description Get list of menu
 * @param req {object} Express req object
 * @param res {object} Express res object
 * @returns {Promise<*>}
 */
async function getMenu(req, res) {
    try {
        // We only pass the body object, never the req object
        console.log(config.studentMenu);
        res.send(config.studentMenu);
    } catch (err) {
        res.status(500).send(err);
    }
}

/**
 * @description Get dashboard items
 * @param req {object} Express req object
 * @param res {object} Express res object
 * @returns {Promise<*>}
 */
async function getDashboard(req, res) {
   
    try {
        // We only pass the body object, never the req object
        let whereStatement = {};
        let field = await helper.ValidateData(req.decoded.username);
        if (field == "email") {
            whereStatement.email = req.decoded.username;
        } else if (field == "phone_number") {
            whereStatement.phone_number = req.decoded.username;
        } else {
            whereStatement.username = req.decoded.username;
        }
        const user = await User.findOne({
            where: whereStatement,
            include: [
                {
                    model: MyClass,
                    required: true,
                },
                {
                    model: Section,
                },
                {
                    model: School,
                },
            ],
        });
        let classteacher = await userService.getClassTeacherBySectionId(
            user.section_id
        );
        let exams = await examService.getActiveExams(
            user.school_id
        );
        let notices = await noticeService.getActiveNotices(
            user.school_id
        );
        let routines = await courseService.getCourses(
            user.school_id, user.section_id,
        );

        let session = await helper.getCurrentSession(user.School.type);

        let syllabuses = await syllabusService.getActiveSyllabus(
            user.school_id, user.class_id, session
        );
        let assignments = await assignmentService.getActiveAssignments(
            user.school_id, user.class_id
        );
        let events = await eventService.getActiveEvents(
            user.school_id
        );

        let classData = [
            {
                classTeacher: classteacher.name,
                section_id: user.section_id,
                class_id: user.class_id,
                section_name: user.Section.section_number,
                class_name: user.MyClass.class_number,
            }
        ];
        const response = [
            {
                classData: classData,
                exams: exams,
                notices: notices,
                routines: routines,
                syllabuses: syllabuses,
                assignments: assignments,
                events: events
            }
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
