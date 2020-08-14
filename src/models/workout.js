const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const WorkoutSchema = new Schema({
  day: {
    type: String,
    required: true,
  },
  exercises:[ {
    type: {
      type: String,
      required: "Enter a type of exercise",
    },
    name: {
      type: String,
      required: "Enter the name of the exercise",
    },
    duration: {
      type: Number,
      required: "Enter the duration of the exercise",
    },
    distance: {
      type: Number,
    },
    weight: {
      type: Number,
    },
    sets: {
      type: Number,
    },
  }],
});

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;