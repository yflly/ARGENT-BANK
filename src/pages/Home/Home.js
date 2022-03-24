import React from "react";
import { featureData } from "../../data/data";
import FeatureItem from "../../components/FeatureItem/FeatureItem";
import "./Home.css";

export default function Home() {
  return (
    <main>
      <div class="hero">
        <section class="hero-content">
          <h2 class="sr-only">Promoted Content</h2>
          <p class="subtitle">No fees.</p>
          <p class="subtitle">No minimum deposit.</p>
          <p class="subtitle">High interest rates.</p>
          <p class="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section class="features">
        <h2 class="sr-only">Features</h2>
        {featureData.map((item) => {
          return <FeatureItem feature={item} key={item.id} />;
        })}
      </section>
    </main>
  );
}
