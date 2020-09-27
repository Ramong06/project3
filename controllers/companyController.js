const db = require("../models");

// Defining methods for the booksController
module.exports = {
  //TODO Need to add FindAll
  //Grabs the Salary info from the Mongoose model using the ticker -> Returns and Object
  findByOne: function (req, res) {
    db.Salary.findOne({ ticker: req.params.ticker })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};