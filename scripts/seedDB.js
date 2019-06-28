const mongoose = require("mongoose");
const db = require("../models");

// This file empties all collections and inserts the seeds below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/soundMaster");

const userSeed = [
  {
    username: "person_1",
    password: "1234"
  }
];

const soundSeed = [
  {
    name: "basicSnareDrum",
    url: "https://project3-sounds.s3.us-east-2.amazonaws.com/Snare+Basic.wav"
  },
  {
    name: "basicClap",
    url: "https://project3-sounds.s3.us-east-2.amazonaws.com/Clap+Basic.wav"
  },
  {
    name: "basicHat",
    url: "https://project3-sounds.s3.us-east-2.amazonaws.com/Hat+Basic.wav"
  },
  {
    name: "basicKick",
    url: "https://project3-sounds.s3.us-east-2.amazonaws.com/Kick+Basic.wav"
  },
  {
    name: "basicSnare",
    url: "https://project3-sounds.s3.us-east-2.amazonaws.com/Snare+Basic.wav"
  },
  {
    name: "electricBass",
    url:
      "https://project3-sounds.s3.us-east-2.amazonaws.com/The+Industry+Collection/Multi+Samples/bass/electric/FINGER+BS+1B/BRITEBSE2.wav"
  },
  {
    name: "acousticGuitar",
    url:
      "https://project3-sounds.s3.us-east-2.amazonaws.com/The+Industry+Collection/Multi+Samples/guitar/accoustic/XTRA+AC+GTR1/GTR+BN4+AC+M.wav"
  },
  {
    name: "electricGuitarJazz",
    url:
      "https://project3-sounds.s3.us-east-2.amazonaws.com/The+Industry+Collection/Multi+Samples/guitar/electric/Jazz+Guitar/Jazz+Guitar+D4.wav"
  }
];
