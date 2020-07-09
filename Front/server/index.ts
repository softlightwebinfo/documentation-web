import next from 'next'
import express from 'express';
import * as path from "path";
// @ts-ignore
import * as fs from "fs";

const multer = require('multer');
// @ts-ignore
const sharp = require('sharp');
const routes = require('./routes');
const app = next({dev: process.env.NODE_ENV !== 'production'});
const handler = routes.getRequestHandler(app);
const cookieParser = require('cookie-parser');
import {Article} from "./models/ArticleModel";

let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27018/documentation', {useNewUrlParser: true, useUnifiedTopology: true});

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

    server.get("/api/articles", async (_, res) => {
        const all = await Article.find({}).sort({created: -1});
        return res.status(200).json(all);
    });
    server.get("/api/tags", async (_, res) => {
        const all = await Article.aggregate([
            {
                "$group": {
                    "_id": null,
                    "tags": {"$addToSet": "$tags"}
                },
            },
            {
                "$addFields": {
                    "tags": {
                        "$reduce": {
                            "input": "$tags",
                            "initialValue": [],
                            "in": {"$setUnion": ["$$value", "$$this"]}
                        }
                    }
                }
            }
        ]);
        return res.status(200).json(all[0]);
    });
    server.get("/api/article/:id", async (req, res) => {
        const all = await Article.findById(req.params.id);
        return res.status(200).json(all);
    });
    server.get("/api/tag/:tag", async (req, res) => {
        // @ts-ignore
        const {tag} = req.params;
        const all = await Article.find({
            tags: {$all: [tag]}
        });
        return res.status(200).json(all);
    });
    server.post("/api/article", async (req, res) => {
        const data = req.body.data;
        let obj = {
            ...data,
            slug: data.title.split(' ').map(i => i.toLowerCase()).join('-'),
            published: true,
        };
        let a = new Article(obj);
        let save = await a.save();
        return res.status(200).json(save);
    });
    server.use(handler).listen(3020)
});

