const userService = require("./user.service");

const getAllUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  res.json(users);
};

const userController = {
  getAllUsers,
};

module.exports = userController;
