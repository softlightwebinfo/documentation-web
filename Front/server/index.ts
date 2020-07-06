import next from 'next'
import express from 'express';
import * as path from "path";
// @ts-ignore
import * as fs from "fs";

const multer = require('multer');
// @ts-ignore
const sharp = require('sharp')
const routes = require('./routes');
const app = next({dev: process.env.NODE_ENV !== 'production'});
const handler = routes.getRequestHandler(app);
const cookieParser = require('cookie-parser');


// @ts-ignore
let storage = multer.diskStorage({
    destination: function (_, __, callback) {
        callback(null, './public/images');
    },
    filename: function (req, file, callback) {
        const ext = path.extname(file.originalname);
        const name = file.fieldname + '-' + Date.now() + ext;
        req.filename = name;
        callback(null, name);
    },
});

// With express
app.prepare().then(() => {
    let server = express();
    server.use(express.json());
    server.use(cookieParser());
    server.use(express.static(path.join(__dirname, 'public')));

    server.use(handler).listen(3000)
});

