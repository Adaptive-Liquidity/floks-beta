import { DeskPreview } from "../components/DeskPreview";

export function Computer() {
  return (
    <div className="page">
      <p className="kicker">The machine</p>
      <h1>An Agent Computer is a desk, not a shared laptop.</h1>
      <p className="lede">
        Default: one Node, one isolated computer. Browser with a real display, private workspace,
        terminal. The cloud provider is plumbing. The product name is Agent Computer.
      </p>
      <div className="split" style={{ marginTop: 40 }}>
        <DeskPreview />
        <ul className="list">
          <li>
            <strong>Observe</strong>
            <span>Screenshot when you ask. Accessibility nodes from live Chrome, never invented as CDP.</span>
          </li>
          <li>
            <strong>Act</strong>
            <span>open_url, type, scroll, wait. Clicks map from the last AX bounds (15s). Offscreen fails closed.</span>
          </li>
          <li>
            <strong>Files / exec</strong>
            <span>Inside a workspace jail. Path escape is rejected. Not a root shell.</span>
          </li>
          <li>
            <strong>Idle</strong>
            <span>Abandoned machines auto-shut. Cost is a warning, not an invoice. We do not meter yet.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
