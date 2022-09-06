const helper = require("../helper/helper.js");
const User = require("../models/user.js");
const MyClass = require("../models/myClass.js");
const Section = require("../models/section.js");
const School = require("../models/school.js");
const StudentInfo = require("../models/studentInfo.js");

class userRepository {
    /**
     * @description Create an instance of PostService
     */
    constructor() {
        // Create instance of Data Access layer using our desired model
    }

    /**
     * @description Attempt to create an user with the provided object
     * @param postToCreate {object} Object containing all required fields to
     * create user
     * @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>}
     */
    async createUser(postToCreate) {
        return await User.findAll();
    }

    /**
     * @description Attempt to get an user with the provided object
     * @param postToCreate {object} Object containing all required fields to
     * get user
     * @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>}
     */
    async getUser(emailorusername) {
        let field = await helper.ValidateData(emailorusername);
        if (field == "email") {
            return await User.findOne({
                where: { email: emailorusername },
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
        } else if (field == "phone_number") {
            return await User.findOne({
                where: { phone_number: emailorusername },
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
        } else {
            return await User.findOne({
                where: { username: emailorusername },
                include: [
                    {
                        model: MyClass,
                        required: true,
                    },
                    {
                        model: Section,
                        required: true,
                    },
                    {
                        model: School,
                        required: true,
                    },
                    {
                        model: StudentInfo,
                    },
                ],
            });
        }
    }
}

module.exports = userRepository;
