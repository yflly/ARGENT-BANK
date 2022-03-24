import React from "react";
import "./FeatureItem.css";

export default function Feature({ feature }) {
  return (
    <div class="feature-item">
      <img src={feature.imgSrc} alt={feature.imgAlt} class="feature-icon" />
      <h3 class="feature-item-title">{feature.title}</h3>
      <p>{feature.description}</p>
    </div>
  );
}
