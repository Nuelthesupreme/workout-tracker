const express = require("express");
const path = require("path");
const db = require("../models");
const { Workout } = require("../models");

const router = express.Router();

const getWorkouts = async (req, res) => {
  const response = await db.Workout.find({});
  res.status(201).send(response);
};

const postWorkouts = async (req, res) => {
  const exercise = new Workout({
    name: req.body.name,
    duration: req.body.duration,
  });
  await db.Workout.create(exercise)
  
  res.redirect("exercise");
};

const updateWorkout = async (req, res) => {
  const id = req.params.id;
  const response = await db.Workout.updateOne(id);
  res.status(201).send(response);
};

const deleteWorkout = async (req, res) => {
    const id = req.params.id;
    const response = await db.Workout.deleteOne(id);
    res.status(201).send(response);
};

router.get("/workouts", getWorkouts);
router.get("/exercise", getWorkouts);
router.get("/workouts/range", getWorkouts);
router.post("/workouts", postWorkouts);
router.put("/workouts/:id", updateWorkout);
router.delete("/workouts/:id", deleteWorkout);
module.exports = router;