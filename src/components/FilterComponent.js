import React from "react";
import WhenComponent from "./WhenComponent";

const filterObj = [
  {
    name: "Location: ",
    properties: ["India", "Australia", "Usa", "Spain", "Maldives"],
  },
  {
    name: "Price: ",
    properties: ["$500-1500", "$1500-2000", "$2000-3000", "$3000+"],
  },
  {
    name: "Type: ",
    properties: ["House", "Villa", "Beach House", "Mountain House"],
  },
];

const FilterComponent = () => {
  return (
    <>
      <div className="wrapper">
        <form action="/">
          {filterObj.map((filter) => {
            return (
              <div className="dropdown">
                <p className="name">{filter.name}</p>
                <select className="default_option">
                  <option
                    className="optionName"
                    selected={true}
                    value={filter.properties[0]}
                  >
                    {filter.properties[0]}
                  </option>
                  <option className="optionName" value={filter.properties[1]}>
                    {filter.properties[1]}
                  </option>
                  <option className="optionName" value={filter.properties[2]}>
                    {filter.properties[2]}
                  </option>
                  <option className="optionName" value={filter.properties[3]}>
                    {filter.properties[3]}
                  </option>
                </select>
                <div className="search_field"></div>
              </div>
            );
          })}
          <input className="datepicker" type="date" id="" name="" />
          <button className="filterbutton" type="submit">
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default FilterComponent;
