import express = require("express");
import methodOverride = require("method-override");
import {urlencoded} from "express";

const app = express();

app.use(methodOverride('_method'));
app.use(urlencoded({
    extended: true,
}));