import express from 'express';
import dotenv from 'dotenv';
import routes from './routes';

const app = express();

// load environment variables
dotenv.config();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/', routes);

export default app;
