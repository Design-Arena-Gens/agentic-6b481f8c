"use client";

import { useState } from "react";
import { phaseCards } from "@/lib/data";

const gradientMap: Record<string, string> = {
  germination: "linear-gradient(135deg, rgba(52, 86, 255, 0.25), transparent)",
  translation:
    "linear-gradient(135deg, rgba(77, 240, 255, 0.25), transparent)",
  resonance: "linear-gradient(135deg, rgba(255, 130, 215, 0.25), transparent)"
};

export function PhaseExplorer() {
  const [active, setActive] = useState<string>(phaseCards[0]?.id ?? "germination");

  return (
    <section className="glass phase-explorer">
      <header>
        <h2>The Three Listening Acts</h2>
        <p>
          Walk the progression that every witness of Hnhihnu eventually travels.
          Each phase responds to how you choose to engage the glyph.
        </p>
      </header>

      <div className="phase-grid">
        <div className="phase-tabs">
          {phaseCards.map((card) => (
            <button
              key={card.id}
              type="button"
              className={active === card.id ? "phase-tab active" : "phase-tab"}
              onClick={() => setActive(card.id)}
            >
              <span>{card.title}</span>
            </button>
          ))}
        </div>

        <article
          className="phase-detail"
          style={{
            backgroundImage: gradientMap[active]
          }}
        >
          {phaseCards.map((card) =>
            card.id === active ? (
              <div key={card.id}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <footer>
                  <span>Contemplate</span>
                  <strong>{card.prompt}</strong>
                </footer>
              </div>
            ) : null
          )}
        </article>
      </div>
    </section>
  );
}

export default PhaseExplorer;
