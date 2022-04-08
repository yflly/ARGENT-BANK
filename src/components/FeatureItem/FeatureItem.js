import React from "react";
import "./FeatureItem.css";

export default function Feature({ feature }) {
  return (
    <div className="feature-item">
      <img src={feature.imgSrc} alt={feature.imgAlt} className="feature-icon" />
      <h3 className="feature-item-title">{feature.title}</h3>
      <p>{feature.description}</p>
    </div>
  );
}
