import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets_articleRight">
        <h4>
          <a href="#">{heading}</a>
        </h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        "Tere bhai ne LinkedIn bana dala",
        "Top news - 2.3M+ Readers"
      )}
      {newsArticle(
        "Placements session(2023-24) starts in MITS",
        "Top news - 5.3M+ Readers"
      )}
      {newsArticle(
        "TCS is hiring for 2023,20234 batch",
        "Top news - 1.3M+ Readers"
      )}
      {newsArticle(
        "Puri Rath Yatra to begin after 2 days",
        "Top news - 3.3M+ Readers"
      )}
      {newsArticle(
        "TATAELXSI stock reaches all time high",
        "Top news - 2.2M+ Readers"
      )}
      {newsArticle(
        "SEBI set to update the Transaction rule for FY-2023-24",
        "Top news - 1.5M+ Readers"
      )}
    </div>
  );
}

export default Widgets;
