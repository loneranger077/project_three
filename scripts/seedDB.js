const mongoose = require("mongoose");
const db = require("../models");

// This file empties all collections and inserts the seeds below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const userSeed = [
  {
    username: "person_1",
    password: "1234"
  }
];

const trackSeed = [
  {
    name: "randomBeat"
  }
];

const soundSeed = [
  {
    name: "snareDrum",
    url: "http://www.google.com"
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Track
  .remove({})
  .then(() => db.Track.collection.insertMany(trackSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Sound
  .remove({})
  .then(() => db.Sound.collection.insertMany(soundSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  })
