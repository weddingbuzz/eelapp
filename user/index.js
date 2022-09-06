import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import logger from 'morgan';

const app = express();
const port = 3002;


app.use(cookieParser());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

import indexRouterv1 from './routes/api/v1/index.js';
import serviceRouterv1 from './routes/api/v1/service.js';
import postRouterv1 from './routes/api/v1/post.js';

app.use('/api/v1/services', serviceRouterv1);
app.use('/api/v1/post', postRouterv1);
app.use('/api/v1/', indexRouterv1);


app.listen(port, () => {
  console.log(`user service listening at ${port}`)
})