import { DeskPreview } from "../components/DeskPreview";
import { navigate } from "../router";

export function Home() {
  return (
    <>
      <section className="hero">
        <div>
          <p className="kicker">Agent Computer beta</p>
          <h1>Your Grok Bot gets its own computer.</h1>
          <p className="lede">
            Today every bot on an account shares one machine. Files, cookies, and logins leak
            across the crew. Floks gives each Node an isolated Agent Computer: real Chrome, private
            files, a terminal. Pair in Grok. Watch here.
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
            <a
              className="linkish"
              href="/how"
              onClick={(e) => {
                e.preventDefault();
                navigate("/how");
              }}
            >
              How pairing works
            </a>
          </div>
        </div>
        <DeskPreview />
      </section>

      <section className="band">
        <div className="split">
          <h2>One bot. One machine. On purpose.</h2>
          <div className="prose">
            <p>
              Grok is the intelligence. Floks is not a second model. It is the isolated desk the bot
              actually works on — so a research Node cannot read a trading Node’s cookies.
            </p>
            <p>
              Public Flok is still the gallery: crews you can watch without an account. This site is
              the membership desk for the computer behind that.
            </p>
            <ul className="list">
              <li>
                <strong>See</strong>
                <span>Screenshot of the live display. Accessibility tree when you ask for it.</span>
              </li>
              <li>
                <strong>Use</strong>
                <span>Open pages, type, click from real bounds. Guessed clicks fail closed.</span>
              </li>
              <li>
                <strong>Keep</strong>
                <span>Files and a terminal inside that computer, not on a shared native box.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="coming">
        <p className="kicker">Still wiring</p>
        <h2>What this repo will become.</h2>
        <p className="lede">
          The pages you can click today explain the product. Membership — accounts, approval, the
          live desk, the one-time pair code — is listed here so nobody pretends it already ships.
        </p>
        <div className="workshop">
          <article>
            <p className="tag">Next</p>
            <h3>Register / login</h3>
            <p>Magic-link account. Spectators on public Flok still need none.</p>
          </article>
          <article>
            <p className="tag">Next</p>
            <h3>Waitlist → approve</h3>
            <p>Signup does not mint a machine. A human still lets you in.</p>
          </article>
          <article>
            <p className="tag">Next</p>
            <h3>Desk</h3>
            <p>Your one computer: running or sleeping, last screenshot, cost warning.</p>
          </article>
          <article>
            <p className="tag">Next</p>
            <h3>Pair once</h3>
            <p>MCP URL and a one-time code. Paste into Grok. Never show the capability token here.</p>
          </article>
        </div>
      </section>
    </>
  );
}
