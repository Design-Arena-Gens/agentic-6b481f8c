"use client";

import { useMemo, useState } from "react";
import { timelineNodes } from "@/lib/data";

type Node = (typeof timelineNodes)[number];

export function ResonanceField() {
  const [focusedIndex, setFocusedIndex] = useState(0);

  const active: Node = useMemo(
    () => timelineNodes[focusedIndex] ?? timelineNodes[0],
    [focusedIndex]
  );

  return (
    <section className="glass resonance-field">
      <header>
        <h2>Resonance Ledger</h2>
        <p>
          The ledger records every documented murmur of Hnhihnu. Hover a glyph
          stamp to surface its echo in the present.
        </p>
      </header>

      <div className="timeline-shell">
        <div className="timeline-axis">
          {timelineNodes.map((node, index) => (
            <button
              key={node.year}
              type="button"
              className={
                focusedIndex === index ? "timeline-node active" : "timeline-node"
              }
              onMouseEnter={() => setFocusedIndex(index)}
              onFocus={() => setFocusedIndex(index)}
            >
              <span className="timeline-year">{node.year}</span>
              <span className="timeline-label">{node.label}</span>
            </button>
          ))}
        </div>

        <article className="timeline-detail">
          <header>
            <h3>{active.label}</h3>
            <span>{active.year}</span>
          </header>
          <p>{active.copy}</p>
        </article>
      </div>
    </section>
  );
}

export default ResonanceField;
