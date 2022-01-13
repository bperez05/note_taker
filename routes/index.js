// const express = require('express');
const route = require("express").Router();

// Import our modular routers for /tips and /feedback
const notesRouter = require('./notes');

const { application } = require("express");

route.use('/api', notesRouter);

module.exports = route;
