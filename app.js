const express = require("express");
const app = express();

const userModel = require("./usermodel");

app.get("/", (req, res) => {
  res.send("Hello");
});

//Create operation

 app.get(`/create`, async (req, res) => {
  let createduser = await userModel.create({
    name: "Madane Sunil",
    email: "madanesunil@gmail.com",
    username: "MadaneS",
  });
  res.send(createduser);
});

//Update operation

app.get(`/update`, async (req, res) => {
  let updateduser = await userModel.findOneAndUpdate(
    { username: "MadaneS" },
    { name: "Madane125" },
    { new: true }
  );
  res.send(updateduser);
});

//Read operation

app.get(`/read`, async (req, res) => {
  let users = await userModel.find();
  res.send(users);
});

//Delete operation

app.get(`/delete`, async (req, res) => {
  let users1 = await userModel.findOneAndDelete({ username: "MadaneS" });
  res.send(users1);
});

app.listen(3000);
