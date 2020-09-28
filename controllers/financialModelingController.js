const db = require("../models");

// Defining methods for the booksController
module.exports = {
  //TODO Need to add FindAll
  //Grabs the Salary info from the Mongoose model using the ticker -> Returns and Object

   companyProfile: function(req, res) {
    const query = req;
    axios
      .get(`https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${REACT_APP_FINANCE_API_KEY}`)
      .then(companies =>
        companies.map((newCompany) => ({
          name: newCompany.data[0].companyName,
          symbol: newCompany.data[0].symbol,
          description: newCompany.data[0].description,
          industry: newCompany.data[0].industry,
          website: newCompany.data[0].website,
          sector: newCompany.data[0].sector,
          image: newCompany.data[0].image,
        }))
      )
      .then(companies => res.json(companies))
      .catch(err => res.status(422).json(err));
  },
  incomeStatement: function (req, res) {
    const ticker = req;
    axios.get(`https://financialmodelingprep.com/api/v3/income-statement-as-reported/${ticker}?period=quarter&apikey=${REACT_APP_FINANCE_API_KEY}`)
      .then(company => res.json(company))
      .catch(err => res.status(422).json(err));
  }
};