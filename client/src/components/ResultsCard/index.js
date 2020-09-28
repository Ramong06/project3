import React from "react";
import "./style.css";

function ResultsCard(props) {
  let description =
    props.company.description.length > 250
      ? props.company.description + "..."
      : props.company.description;
  return (
    <div className="row justify-content-center">

      <div className="card mb-3" style={{ width: "900px" }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src={props.company.image}
              className="card-img"
              alt="company logo"
              style={{ maxWidth: "150px" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.company.name}</h5>
            </div>
          </div>
          {/* <div className="col-md-12"></div> */}
        </div>
      </div>
    </div>
  );
}

export default ResultsCard;

// var snippetText = {props.company.description};
//        if (snippetText.length > 200) {
//          snippetText = snippetText.slice(0, 200);}
