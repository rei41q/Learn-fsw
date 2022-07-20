const userService = require("./user.service");

const getAllUsers = async (req, res) => {
  const { q } = req.query;
  const users = await userService.getAllUsers(q);
  res.json(users);
};

const userController = {
  getAllUsers,
};

module.exports = userController;
