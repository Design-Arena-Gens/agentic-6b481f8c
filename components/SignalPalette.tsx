"use client";

import { useMemo, useState } from "react";

const emotionalAnchors = [
  {
    id: "serenity",
    name: "Serenity Drift",
    tones: ["#6a8dff", "#a7baff", "#f1f5ff"],
    description:
      "A lullaby current. The glyph softens, stretching into watercolor ribbons that dim the outer world."
  },
  {
    id: "curiosity",
    name: "Curiosity Prism",
    tones: ["#4df0ff", "#8df8ff", "#d2feff"],
    description:
      "Edges sharpen, questions multiply. The glyph hums with subharmonics that resonate just behind the ear."
  },
  {
    id: "ferocity",
    name: "Ferocity Ember",
    tones: ["#ff80c8", "#ffb8e5", "#ffe4f7"],
    description:
      "Lines crackle with ultraviolet sparks. The glyph surges, reflecting every stored roar until it cools."
  }
] as const;

export function SignalPalette() {
  const [anchor, setAnchor] = useState<(typeof emotionalAnchors)[number]>(
    emotionalAnchors[0]
  );

  const gradientStyle = useMemo(
    () => ({
      background: `linear-gradient(135deg, ${anchor.tones[0]}, ${anchor.tones[1]})`
    }),
    [anchor]
  );

  return (
    <section className="glass signal-palette">
      <header>
        <h2>Signal Palette</h2>
        <p>
          Choose the emotional anchor and Hnhihnu shifts accordingly. This is
          the palette used to tune the living glyph before performance.
        </p>
      </header>

      <div className="palette-grid">
        <div className="anchor-controls">
          {emotionalAnchors.map((item) => (
            <button
              key={item.id}
              type="button"
              className={
                anchor.id === item.id ? "anchor-chip active" : "anchor-chip"
              }
              onClick={() => setAnchor(item)}
            >
              <span className="anchor-swatch">
                {item.tones.map((tone) => (
                  <span
                    key={tone}
                    className="anchor-color"
                    style={{ backgroundColor: tone }}
                  />
                ))}
              </span>
              <span>{item.name}</span>
            </button>
          ))}
        </div>

        <article className="anchor-preview" style={gradientStyle}>
          <div className="anchor-legend glass">
            <h3>{anchor.name}</h3>
            <p>{anchor.description}</p>
            <dl>
              {anchor.tones.map((tone) => (
                <div key={tone} className="tone-line">
                  <dt>{tone}</dt>
                  <dd>Hex tone resonating in this alignment</dd>
                </div>
              ))}
            </dl>
          </div>
        </article>
      </div>
    </section>
  );
}

export default SignalPalette;
