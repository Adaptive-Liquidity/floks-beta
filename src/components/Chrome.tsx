import type { ReactNode, MouseEvent } from "react";
import type { Route } from "../router";
import { navigate } from "../router";

const LINKS: Array<{ to: Route; label: string }> = [{ to: "/how", label: "How it works" }, { to: "/computer", label: "Agent Computer" }, { to: "/limitations", label: "Limits" }];

export function Chrome({ route, children }: { route: Route; children: ReactNode }) {
  const go = (to: Route) => (e: MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); navigate(to); };
  return <div className="shell">
    <a className="skip" href="#main">Skip to content</a>
    <header className="top">
      <a className="mark" href="/" onClick={go("/")} aria-label="FLOKS home"><span className="mark-symbol">ϟ</span>FLOKS</a>
      <nav className="nav" aria-label="Primary">{LINKS.map((link) => <a key={link.to} href={link.to} aria-current={route === link.to ? "page" : undefined} onClick={go(link.to)}>{link.label}</a>)}</nav>
      <a className="nav-cta" href="/beta" onClick={go("/beta")}>Request beta <span>↗</span></a>
    </header>
    <main id="main" className="main">{children}</main>
    <footer className="foot"><a className="mark footer-mark" href="/" onClick={go("/")}><span className="mark-symbol">ϟ</span>FLOKS</a><p>Your Bots finally get their own computers.</p><div><a href="/limitations" onClick={go("/limitations")}>Honest limits</a><span>Private beta / 2026</span></div></footer>
  </div>;
}
