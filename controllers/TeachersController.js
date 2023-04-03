const teachers = require("../data/teachers.json");

class TeachersController {
  static getAllData(req, res) {
    res.json(teachers);
  }
}

module.exports = TeachersController;
