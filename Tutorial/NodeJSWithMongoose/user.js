// defines a Mongoose schema with three fields: “name”, “email”, and “age”. 
// We then create a Mongoose model called “User” using this schema, 
// and export it for use in other parts of our application
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model('User', userSchema);
module.exports = User;
