import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import SearchForm from "../../components/SearchForm";
import Navbar from "../../components/Navbar";
import ResultsCard from "../../components/ResultsCard";
import Footer from "../../components/Footer";
import { Container } from "react-bootstrap";

function Results({ searchData, handleSearchResults }) {
  console.log(searchData);
  return (
    <React.Fragment>
      <Navbar />
      <h2>Results</h2>
      <SearchForm handleSearchResults={handleSearchResults} />
      {searchData.length ? (
        <ul>
          {searchData.map((company) => (
            <li key={company.symbol}>
              <Link to={"/company/" + company.symbol}>
                <ResultsCard company={company} />
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div>No Results</div>
      )}
      <Footer />
    </React.Fragment>
  );
}

export default Results;
