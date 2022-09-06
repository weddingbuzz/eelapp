import express from 'express';
var serviceRouterv1 = express.Router();

// Require controller modules.
import service_controller from '../../../controllers/serviceController.js';

/* GET users listing. */
serviceRouterv1.get('/clearcache', service_controller.clearCache);

export default serviceRouterv1;
