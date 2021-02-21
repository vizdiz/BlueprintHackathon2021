/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");

// import models so we can interact with the database
const User = require("./models/user");
const Classroom = require("./models/class")
const Assignemnt = require("./models/assignment")

// import authentication library
const auth = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

//initialize socket
const socketManager = require("./server-socket");
const assignment = require("./models/assignment");

router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/whoami", (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }

  res.send(req.user);
});

router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user) socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
  res.send({});
});

// |------------------------------|
// | write your API methods below!|
// |------------------------------|

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

router.get("/classes", (req, res) => {
  let requestedClasses = req.body.classIds
  Classroom.find({/*add filter?*/}).then((classes) =>{
    res.send(classes);
  })
})

router.post("/newclass", (req, res) => {
  let newClass = new Classroom({
    className: req.body.className,
 //   classId: ,
  })
})

router.get("/assignments", (req, res) => {
  let requestedClass = req.body.requestedClass
  let user = req.body.user
  Assignment.find({}).then((assignments) => {
    res.send(assignments);
  })
})

router.put("/enrollclass", (req, res) => {
  let user = req.user._id
})

router.put("/finishassignment", (req, res) => {
  user.finishedAssignments.add(req.body.assignment)
  user.save();
})

router.post("/newassignment", (req, res) => {
  let newAssignment = new Assignment({
    name: req.body.name,
   // assignmentId: ,
    classId: req.body.classId,
    date: req.body.date,
    finishedUsers: [],
  })
  newAssignment.save();
})

module.exports = router;
