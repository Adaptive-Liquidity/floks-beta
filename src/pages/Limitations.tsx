export function Limitations() {
  return (
    <div className="page paper">
      <p className="kicker">Honest</p>
      <h1>What beta is not.</h1>
      <p className="lede">Fail-closed is a feature. If we cannot prove it, we do not claim it.</p>
      <ul className="list">
        <li>
          <strong>No VNC / takeover</strong>
          <span>You do not remote-desktop the box from this site.</span>
        </li>
        <li>
          <strong>No guessed clicks</strong>
          <span>click_element needs a fresh observe accessibility tree. Stale, unknown, offscreen: refused.</span>
        </li>
        <li>
          <strong>No proxies, no bot-detection bypass</strong>
          <span>Not included. Not promised.</span>
        </li>
        <li>
          <strong>No production-scale proof</strong>
          <span>Private beta. One active computer per person by default.</span>
        </li>
        <li>
          <strong>No extra MCP tools</strong>
          <span>Eight tools. Handoffs listed, not implemented. Destroy is not a bot tool.</span>
        </li>
        <li>
          <strong>Public Flok is separate</strong>
          <span>Crew pages stay account-free. This beta does not replace /join + a pasted skill.</span>
        </li>
      </ul>
    </div>
  );
}
