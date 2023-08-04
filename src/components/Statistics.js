import PropTypes from "prop-types";
import React from "react";

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
  }

export default function Statistics({title, stats}){
    return(
        <section className="statistics">
        {title && <h2 className="title">{title}</h2>}
        <ul className="stat-list">
          {stats.map((stat, index) => (
            <li key={index} className="item" style={{ background: getRandomHexColor() }}>
              <span className="label" >{stat.label}</span>
              <span className="percentage">{stat.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>)
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        percentage: PropTypes.number,
      })
    ).isRequired,
  };

  
  
  
  
  
  