const mongoose = require("mongoose");
const User = require("./models/User");

mongoose
  .connect("mongodb://localhost/exampleApp")
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));

//model
//username
//password

//two arguments
//1. STRING The name we will store it in MongoDb
// The format has to be Uppercase singular
//2. Schema
//username
//password

// let users = [
//   {
//     username: "Nick",
//     password: "password1",
//     favoriteIceCream: "chocolate",
//   },
//   {
//     username: "Manny",
//     password: "password1",
//     favoriteIceCream: "vanilla",
//   },
//   {
//     username: "Yaron",
//     password: "password1",
//     favoriteIceCream: "strawberry",
//   },
//   {
//     username: "Juan",
//     password: "password1",
//     favoriteIceCream: "chocolate",
//   },
//   {
//     username: "Carlos",
//     password: "password1",
//     favoriteIceCream: "strawberry",
//   },
//   {
//     username: "Lauren",
//     password: "password1",
//     favoriteIceCream: "chocolate",
//   },
//   {
//     username: "Hailey",
//     password: "password1",
//     favoriteIceCream: "strawberry",
//   },
//   {
//     username: "Jesse",
//     password: "password1",
//   },
//   {
//     username: "Wendy",
//     password: "password1",
//     favoriteIceCream: "vanilla",
//   },
//   {
//     username: "Ryan",
//     password: "password1",
//     favoriteIceCream: "vanilla",
//   },
// ];

// User.create(users)
//   .then((response) => {
//     console.log("This is what we got back from MongoDB", response);
//   })
//   .catch((err) => {
//     console.log("Something went wrong", err);
//   })
//   .finally(() => {
//     mongoose.connection.close();
//   });

//CRUD

//Create DONE
//Read DONE
//Update
//Destroy/Delete DONE

//Read

//.find() search for a property, and this returns an array of all objects that contain that property

//find all
// User.find()
//   .then((results) => {
//     console.log("This is what we found", results);
//   })
//   .catch((err) => {
//     console.log("Something went wrong: ", err);
//   })
//   .finally(() => {
//     mongoose.connection.close();
//   });

//pass in an object to find a specific property
//Will always return an array

// User.find({ favoriteIceCream: "chocolate" })
//   .then((results) => {
//     console.log("This is what we found", results);
//   })
//   .catch((err) => {
//     console.log("Something went wrong: ", err);
//   })
//   .finally(() => {
//     mongoose.connection.close();
//   });

//.findOne
// User.findOne({ favoriteIceCream: "chocolate" })
//   .then((results) => {
//     console.log("This is what we found", results);
//   })
//   .catch((err) => {
//     console.log("Something went wrong: ", err);
//   })
//   .finally(() => {
//     mongoose.connection.close();
//   });

//.findById - Search by id. Only takes the string, not an object
// User.findById("61faebb774f9644feb3ac142")
//   .then((results) => {
//     console.log("This is what we found", results);
//   })
//   .catch((err) => {
//     console.log("Something went wrong: ", err);
//   })
//   .finally(() => {
//     mongoose.connection.close();
//   });

//UPDATE

//.findByIdAndUpdate()- Takes two arguments,
//1. The id string
//2. An object of what we will be changing

// User.findByIdAndUpdate("61faebb774f9644feb3ac143", {
//   car: "Chevron",
// })
//   .then((results) => {
//     console.log("This is what we found", results);
//   })
//   .catch((err) => {
//     console.log("Something went wrong: ", err);
//   })
//   .finally(() => {
//     mongoose.connection.close();
//   });

//DELETE
// User.findByIdAndDelete("61faebb774f9644feb3ac142")
//   .then((results) => {
//     console.log("This is what we found", results);
//   })
//   .catch((err) => {
//     console.log("Something went wrong: ", err);
//   })
//   .finally(() => {
//     mongoose.connection.close();
//   });
