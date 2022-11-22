import express = require("express");
import methodOverride = require("method-override");
import {static as eStatic, urlencoded} from "express";
import {engine} from "express-handlebars";

const app = express();

app.use(methodOverride('_method'));
app.use(urlencoded({
    extended: true,
}));
app.use(eStatic('public'));
app.engine('.hbs', engine({
    extname: '.hbs',
    //helpers??
}))