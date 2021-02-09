const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String
  },
  type: {
    type: String
  },
  weight: {
    type: Number
  },
  sets: {
      type: String
  },
  reps: {
      type: Number
  },
  duration: {
      type: Number
  },
  distance: {
      type: Number
  }

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;