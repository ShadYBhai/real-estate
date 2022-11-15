import React from "react";
import PropertiesComponentStyles from "../styles/PropertiesComponent.css";

const PropertiesComponent = ({ properties }) => {
  return (
    <div className="cards">
      {properties &&
        properties.map((property) => {
          return (
            <>
              <div className="card" key={property.name}>
                <div className="container">
                  <img
                    className="property"
                    src={property.img}
                    alt={property.name}
                  />
                  <div>
                    <p>{property.price}</p>
                    <span>{property.ico}</span>
                    <p>{property.name}</p>
                    <span>{property.address}</span>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default PropertiesComponent;
