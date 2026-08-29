export function DeskPreview({ still = false }: { still?: boolean }) {
  return (
    <aside className="desk-preview" aria-label="Preview of an Agent Computer desk">
      <header>
        <span>This bot has this computer</span>
        <span>{still ? "Waiting" : "Ready"}</span>
      </header>
      <div className="screen">
        <h3>FLOKS fixture</h3>
        <p>A private Chrome, files, and a terminal. Pair in Grok. Watch the screen here.</p>
        <span className="fixture-btn">Submit</span>
      </div>
      <div className="eyes" aria-hidden="true">
        <i className={still ? "eye still" : "eye"} />
        <i className={still ? "eye still" : "eye"} />
      </div>
    </aside>
  );
}
