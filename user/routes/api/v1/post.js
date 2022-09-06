import express from "express";
var postRouterv1 = express.Router();

import auth from "../../../middleware/auth.js";
import uploadS3 from "../../../middleware/uploadS3.js";

// Require controller modules.
import assignment_controller from "../../../controllers/assignmentController.js";

/* POST assignments. */
postRouterv1.post(
    "/assignment",
    auth, uploadS3.single("file"),
    assignment_controller.postAssignment
);

export default postRouterv1;
