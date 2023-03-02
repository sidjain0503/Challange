// <<<<<<< HEAD
//This file is for connecting to database

const connection = () => {
    const mongoose = require("mongoose");
    const Url = "mongodb://localhost:27017/Challenge";
    mongoose
      .connect(Url,{
        useNewUrlParser: true
    })
      .then(() => {
        console.log("connected to database mongodb");
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };
  
  module.exports = connection;
  