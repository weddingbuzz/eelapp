
import express from 'express';
var indexRouterv1 = express.Router();

import auth from '../../../middleware/auth.js';
import apicache from 'apicache';

import dotenv from 'dotenv';
dotenv.config();

apicache.options({
  appendKey: (req, res) => req.method + (req.headers['x-access-token'] || req.headers['authorization']),
})

//configure apicache 
let indexRouterv1Cache = apicache.middleware

// higher-order function returns false for responses of other status codes (e.g. 403, 404, 500, etc)
const onlyStatus200 = (req, res) => res.statusCode === 200
//caching all routes for n minutes
indexRouterv1.use(indexRouterv1Cache(process.env.CACHE_DURATION, onlyStatus200))


/* GET home page. */
indexRouterv1.get('/', function(req, res, next) {
  res.send('index');
});

// Require controller modules.
import home_controller from '../../../controllers/homeController.js';
import course_controller from '../../../controllers/courseController.js';
import assignment_controller from '../../../controllers/assignmentController.js';

/* GET dashborad. */
indexRouterv1.get('/dashboard', auth, home_controller.getDashboard);

/* GET menu listing. */
indexRouterv1.get('/menu', auth, home_controller.getMenu);

/* GET assignments api. */
indexRouterv1.get('/assignments/:school_id/:class_id', auth, assignment_controller.getMyAssignments);

/* GET my courses api. */
indexRouterv1.get('/periods/:teacher_id/:section_id', auth, course_controller.getMyCourses);

export default indexRouterv1;
