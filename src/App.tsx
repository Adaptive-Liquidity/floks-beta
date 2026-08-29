import { useEffect, useState } from "react";
import { Chrome } from "./components/Chrome";
import { Beta } from "./pages/Beta";
import { Computer } from "./pages/Computer";
import { Home } from "./pages/Home";
import { How } from "./pages/How";
import { Limitations } from "./pages/Limitations";
import { pathToRoute, type Route } from "./router";

function Page({ route }: { route: Route }) {
  switch (route) {
    case "/how":
      return <How />;
    case "/computer":
      return <Computer />;
    case "/beta":
      return <Beta />;
    case "/limitations":
      return <Limitations />;
    default:
      return <Home />;
  }
}

export function App() {
  const [route, setRoute] = useState<Route>(() => pathToRoute(window.location.pathname));

  useEffect(() => {
    const onPop = () => setRoute(pathToRoute(window.location.pathname));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  return (
    <Chrome route={route}>
      <Page route={route} />
    </Chrome>
  );
}
