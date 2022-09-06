import User from "../models/user.js";

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
        return User.findAll();
    }

    /**
    * @description Attempt to get an user with the provided object
    * @param postToCreate {object} Object containing all required fields to
    * get user
    * @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>}
    */
    async getUser(postToCreate) {
        return User.findAll();
    }

     /**
    * @description Attempt to get an user with the provided object
    * @param postToCreate {object} Object containing all required fields to
    * get user
    * @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>}
    */
      async generateToken(postToCreate) {
        return models.User.findAll();
    }
}

export default userRepository;