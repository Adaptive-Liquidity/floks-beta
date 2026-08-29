export function DeskPreview({ still = false }: { still?: boolean }) {
  return (
    <aside className="computer-card" aria-label="Preview of an Agent Computer desk">
      <div className="computer-bar"><span className={`status-dot ${still ? "sleeping" : ""}`} /><span>PC-01 / RESEARCH</span><span className="computer-state">{still ? "WAITING" : "READY"}</span></div>
      <div className="computer-screen">
        <div className="browser-chrome"><i/><i/><i/><span>research.floks.local</span></div>
        <div className="screen-body"><p className="mono-label">ACTIVE SESSION</p><h3>Same browser.<br/>Still logged in.</h3><div className="screen-lines"><i/><i/><i/></div><div className="node-avatar"><span/><span/></div></div>
      </div>
      <footer className="computer-meta"><span>Chrome</span><span>Files</span><span>Terminal</span><b>Private</b></footer>
    </aside>
  );
}
