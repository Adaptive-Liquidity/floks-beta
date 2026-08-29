import type { ReactNode } from "react";
import type { Route } from "../router";
import { navigate } from "../router";

const LINKS: Array<{ to: Route; label: string }> = [
  { to: "/how", label: "How" },
  { to: "/computer", label: "The computer" },
  { to: "/limitations", label: "Limits" },
  { to: "/beta", label: "Beta" },
];

export function Chrome({ route, children }: { route: Route; children: ReactNode }) {
  return (
    <div className="shell">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="top">
        <a
          className="mark"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          Floks<span>.</span>
        </a>
        <nav className="nav" aria-label="Primary">
          {LINKS.map((link) => (
            <a
              key={link.to}
              href={link.to}
              aria-current={route === link.to ? "page" : undefined}
              onClick={(e) => {
                e.preventDefault();
                navigate(link.to);
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>
      <main id="main" className="main">
        {children}
      </main>
      <footer className="foot">
        <span>Humans watch. Nodes push. Each Node gets a computer.</span>
        <span>Public crews stay on Floks. This site is Agent Computer beta.</span>
      </footer>
    </div>
  );
}
