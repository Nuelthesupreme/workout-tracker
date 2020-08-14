const express = require("express");
const path = require("path");
const db = require("../models");
const router = express.Router();

const getHomePage = (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
};

const getStatsPage = (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
};

const getExercisePage = (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
};

router.get("/", getHomePage);
router.get("/stats", getStatsPage);
router.get("/exercise", getExercisePage);

module.exports = router;