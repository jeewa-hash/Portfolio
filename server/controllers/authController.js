const jwt = require('jsonwebtoken');

const login = (req, res) => {
  // TODO: Implement login logic
  const token = jwt.sign({ id: 1 }, process.env.JWT_SECRET);
  res.json({ token });
};

const logout = (req, res) => {
  res.json({ message: 'Logged out' });
};

module.exports = { login, logout };
