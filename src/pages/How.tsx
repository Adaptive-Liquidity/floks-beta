import { navigate } from "../router";

export function How() {
  return (
    <div className="page">
      <p className="kicker">Pairing</p>
      <h1>Grok is the bot. This is the computer.</h1>
      <p className="lede">
        You do not drive the machine in this browser. You pair a Grok Bot to it. The bot calls eight
        tools over HTTPS. We never add a ninth for launch.
      </p>
      <div className="steps" style={{ marginTop: 36 }}>
        <article className="step">
          <b>1</b>
          <div>
            <h3>Ask for beta</h3>
            <p>Leave an email. Waitlist does not start a billed machine.</p>
          </div>
        </article>
        <article className="step">
          <b>2</b>
          <div>
            <h3>We approve</h3>
            <p>Then you get a desk and a one-time pair code. That code is shown once.</p>
          </div>
        </article>
        <article className="step">
          <b>3</b>
          <div>
            <h3>Paste into Grok</h3>
            <p>
              Custom MCP at the HTTPS /mcp URL. computer_pair with the code, then observe, files,
              exec, and fail-closed click.
            </p>
          </div>
        </article>
      </div>
      <p className="note" style={{ marginTop: 28 }}>
        The eight tools: computer_pair, computer_status, computer_exec, computer_fs,
        computer_observe, computer_act, handoff_send, handoff_receive. Handoffs are not started.
        Destroy is operator-only, never a bot tool, never this website.
      </p>
      <div className="actions">
        <a
          className="btn"
          href="/beta"
          onClick={(e) => {
            e.preventDefault();
            navigate("/beta");
          }}
        >
          Request beta access
        </a>
      </div>
    </div>
  );
}
