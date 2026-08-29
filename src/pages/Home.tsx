import type { MouseEvent } from "react";
import { DeskPreview } from "../components/DeskPreview";
import { navigate } from "../router";

const go = (to: "/beta" | "/how" | "/computer") => (e: MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); navigate(to); };

export function Home() {
  return <>
    <section className="hero">
      <div className="hero-copy">
        <div className="eyebrow"><span className="live-dot"/>AGENT COMPUTER / PRIVATE BETA</div>
        <h1>Your Bot wasn’t lazy.<br/><em>It was homeless.</em></h1>
        <p className="lede">Give every Bot a real, isolated computer with its own browser, files, terminal, and persistent identity. Grok stays the intelligence. FLOKS gives it somewhere to work.</p>
        <div className="actions"><a className="btn" href="/beta" onClick={go("/beta")}>Request beta access <span>↗</span></a><a className="linkish" href="/how" onClick={go("/how")}>See how pairing works <span>→</span></a></div>
        <div className="hero-proof"><span>01</span><p><b>ONE BOT</b> / ONE COMPUTER / SEPARATE CHAOS</p></div>
      </div>
      <div className="hero-visual"><img src="/images/floks-office.jpg" alt="A private FLOKS office with a separate desk for each Bot" /><div className="visual-label"><span>FLOKS OFFICE / 01</span><b>5 NODES · 5 COMPUTERS</b></div></div>
    </section>
    <section className="manifesto">
      <p className="section-index">01 / THE PROBLEM</p>
      <div className="manifesto-grid"><h2>One shared machine was never a crew.</h2><div><p>When every Bot shares the same computer, files collide, logins leak across roles, and yesterday’s browser state becomes everybody’s problem.</p><p className="quiet">That is not multi-agent infrastructure. That is five coworkers fighting over one laptop.</p></div></div>
      <div className="contrast-grid">
        <article className="contrast old"><span>WITHOUT FLOKS</span><h3>One account.<br/>One machine.<br/>No boundaries.</h3><div className="shared-machine"><i/><i/><i/><i/><i/><b>SHARED</b></div></article>
        <article className="contrast new"><span>WITH FLOKS</span><h3>One Bot.<br/>One browser identity.<br/>One clean boundary.</h3><div className="separate-machines"><i/><i/><i/><i/><i/></div></article>
      </div>
    </section>
    <section className="proof-section">
      <div className="proof-image"><img src="/images/floks-control.jpg" alt="FLOKS computer control plane"/><span>CONTROL PLANE / LIVE STATE</span></div>
      <div className="proof-copy"><p className="section-index">02 / THE COMPUTER</p><h2>A real working environment. Not another chat window.</h2><p>Persistent Chrome. Private files. Controlled terminal access. A durable machine identity that can sleep, recover, and return to the work.</p>
        <ul className="feature-list"><li><span>01</span><div><b>Observe the real screen</b><p>Live screenshot and accessibility state when requested.</p></div></li><li><span>02</span><div><b>Act from verified bounds</b><p>Stale, unknown, and offscreen clicks fail closed.</p></div></li><li><span>03</span><div><b>Keep the work</b><p>Files and browser sessions stay with the Node, not a shared host.</p></div></li></ul>
        <a className="text-link" href="/computer" onClick={go("/computer")}>Inspect the Agent Computer <span>→</span></a></div>
    </section>
    <section className="mechanism"><p className="section-index">03 / HOW IT WORKS</p><h2>Pair once. Then let the Bot work.</h2><div className="mechanism-grid"><article><span>01</span><div className="mechanism-icon">◎</div><h3>Request access</h3><p>Join the private beta. A signup never starts a billed machine by itself.</p></article><article><span>02</span><div className="mechanism-icon">⌁</div><h3>Pair your Bot</h3><p>Use a short-lived, one-time code with the FLOKS MCP endpoint.</p></article><article><span>03</span><div className="mechanism-icon">▣</div><h3>Watch the work</h3><p>See state and proof here. The Bot operates through eight controlled tools.</p></article></div></section>
    <section className="close"><div><p className="eyebrow"><span className="live-dot"/>PRIVATE BETA</p><h2>Give your Bot<br/>a place to clock in.</h2><p>Separate files. Separate browsers. Separate chaos.</p><a className="btn light" href="/beta" onClick={go("/beta")}>Request beta access <span>↗</span></a></div><DeskPreview /></section>
  </>;
}
