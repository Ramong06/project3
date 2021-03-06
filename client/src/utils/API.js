import axios from "axios";

const FinanceAPIKey = "2a4568cb592dd5395bf91d7c44544431";
const NewsAPIKey = "d81ac61ae04549568cc53bd35de7e642";
// const NewsAPIKey = "aa813f40392f49fc89c98ab8058ba361";
// back API Key: 4e3547306afaa6492556d30e54c4c620 || 2a4568cb592dd5395bf91d7c44544431

const tickerSearch = function (query) {
  return axios.get(
    `https://financialmodelingprep.com/api/v3/search?query=${query}&apikey=${FinanceAPIKey}`
  );
};

const companyProfile = function (query) {
  return axios.get(
    `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${FinanceAPIKey}`
  );
};

const incomeStatement = function (ticker) {
  return axios.get(
    `https://financialmodelingprep.com/api/v3/income-statement/${ticker}?period=quarter&limit=12&apikey=${FinanceAPIKey}`
  );
};

const companyHeadlines = function (query) {
  return axios.get(
    `https://newsapi.org/v2/top-headlines?q=${query}&apiKey=${NewsAPIKey}`
  );
};

const getTickerCompany = function (ticker) {
  return axios.get("/api/tickercompany/" + ticker);
};

const getNoTickerCompany = function (id) {
  return axios.get("/api/notickercompany/" + id);
};

export default {
  companyHeadlines,
  tickerSearch,
  companyProfile,
  incomeStatement,
  companyHeadlines,
  getTickerCompany,
  getNoTickerCompany,
};
