export const ROUTES = ["/", "/how", "/computer", "/beta", "/limitations"] as const;

export type Route = (typeof ROUTES)[number];

export function pathToRoute(pathname: string): Route {
  const clean = pathname.replace(/\/+$/, "") || "/";
  if ((ROUTES as readonly string[]).includes(clean)) return clean as Route;
  return "/";
}

export function navigate(to: Route): void {
  if (window.location.pathname === to) return;
  window.history.pushState({}, "", to);
  window.dispatchEvent(new PopStateEvent("popstate"));
}
