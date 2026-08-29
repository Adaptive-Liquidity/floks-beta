import { useState, type FormEvent } from "react";

const STORAGE = "floks-beta-waitlist-v1";

export function Beta() {
  const [email, setEmail] = useState("");
  const [saved, setSaved] = useState(() => {
    try {
      return Boolean(localStorage.getItem(STORAGE));
    } catch {
      return false;
    }
  });

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const value = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return;
    try {
      localStorage.setItem(STORAGE, JSON.stringify({ email: value, at: new Date().toISOString() }));
    } catch {
      /* ignore quota */
    }
    setSaved(true);
  }

  return (
    <div className="page paper">
      <p className="kicker">Beta</p>
      <h1>Ask for a computer. Do not expect one tonight.</h1>
      <p className="lede">
        Leave an email. This page stores it in this browser only — real accounts, waitlist, and
        approval are not wired to the control plane yet. Signup will never mint a billed machine by
        itself.
      </p>
      {saved ? (
        <p className="ok">Noted on this device. When login ships, this becomes a real waitlist.</p>
      ) : (
        <form className="form" onSubmit={onSubmit}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="btn" type="submit">
            Request access
          </button>
          <p className="note">
            We will not start a cloud computer from this form. Approval is still a human.
          </p>
        </form>
      )}
      <ul className="list" style={{ marginTop: 36 }}>
        <li>
          <strong>Not built: magic-link login</strong>
          <span>Register and return. Public Flok stays unlocked.</span>
        </li>
        <li>
          <strong>Not built: operator approve → desk</strong>
          <span>Your one computer, screenshot, idle warning.</span>
        </li>
        <li>
          <strong>Not built: one-time pair code</strong>
          <span>Shown once, then gone. Grok keeps the capability token, not this site.</span>
        </li>
      </ul>
    </div>
  );
}
