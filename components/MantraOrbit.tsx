import { glyphMantras } from "@/lib/data";

export function MantraOrbit() {
  return (
    <section className="glass mantra-orbit">
      <header>
        <h2>Mantras to Unlock the Glyph</h2>
        <p>
          Recite these fragments while tracing the symbol. Each phrase unlocks
          an alternate hue in the Hnhihnu spectrum.
        </p>
      </header>
      <div className="mantra-grid">
        {glyphMantras.map((item) => (
          <article key={item.title} className="mantra-card">
            <h3>{item.title}</h3>
            <p>{item.mantra}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default MantraOrbit;
