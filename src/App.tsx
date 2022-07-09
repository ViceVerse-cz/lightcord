import Router from "preact-router";
import AsyncRoute from "preact-async-route";
import { Link } from "preact-router/match";

export const App = () => (
  <Router>
    <AsyncRoute
      path="/"
      getComponent={() =>
        import("./pages/Client").then((module) => module.default)
      }
      default
    />
    <AsyncRoute
      path="/auth"
      getComponent={() =>
        import("./pages/Auth").then((module) => module.default)
      }
    />
    <AsyncRoute
      path="/loading"
      getComponent={() =>
        import("./pages/Loading").then((module) => module.default)
      }
    />
  </Router>
);
