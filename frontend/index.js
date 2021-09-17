// frontend/index.js

import express from 'express';
import template from './src/template';

const app = express();

app.use('/dist', express.static('../dist'));
app.get("*", (req, res) => res.send(template("Flask React App")));

app.listen(process.env.APP_FRONTEND_PORT);
