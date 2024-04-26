const UserModel = require("../model/user");




module.exports.getAllUser = async (req, res) => {
    try {
      const user = await UserModel.find();
      res.json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  };
  
  module.exports.addUser = async (req, res) => {
    const { email, username } = req.body;
    try {
      const newUser = new UserModel({ email, username });
      await newUser.save();
      res.status(201).json(newUser);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  };