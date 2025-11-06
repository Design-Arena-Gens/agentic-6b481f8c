import AnimatedGlyph from "@/components/AnimatedGlyph";
import { MantraOrbit } from "@/components/MantraOrbit";
import { PhaseExplorer } from "@/components/PhaseExplorer";
import { ResonanceField } from "@/components/ResonanceField";
import { SignalPalette } from "@/components/SignalPalette";

const sigils = [
  "Echo cartographers",
  "Nocturne archivists",
  "Frequencies unsung"
] as const;

export default function Page() {
  return (
    <main>
      <section className="glass hero">
        <div className="hero-copy">
          <h1>Hnhihnu: The Living Glyph</h1>
          <p>
            Hnhihnu is not read. It is listened to—an emergent glyph woven from
            harmonic light and memory residue. Let the resonance align with your
            pulse and the story writes itself.
          </p>

          <div className="hero-cta">
            <button className="primary" type="button">
              Initiate Resonance
            </button>
            <button className="secondary" type="button">
              View Listener Ledger
            </button>
          </div>

          <ul>
            {sigils.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <AnimatedGlyph />
      </section>

      <PhaseExplorer />
      <ResonanceField />
      <MantraOrbit />
      <SignalPalette />

      <p className="footnotes">
        Hnhihnu evolves with each visitor. <strong>Document your hum</strong>{" "}
        and return at ∆23 for the next chorus.
      </p>
    </main>
  );
}
