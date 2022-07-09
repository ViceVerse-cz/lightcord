import Router from "preact-router";
import AsyncRoute from "preact-async-route";
import Loading from "./pages/Loading";
import { Link } from "preact-router/match";

export const App = () => (
  <Router>
    <AsyncRoute
      path="/"
      getComponent={() =>
        import("./pages/Client").then((module) => module.default)
      }
      loading={Loading}
      default
    />
    <AsyncRoute
      path="/auth"
      getComponent={() =>
        import("./pages/Auth").then((module) => module.default)
      }
      loading={Loading}
    />
    <AsyncRoute
      path="/loading"
      getComponent={() =>
        import("./pages/Loading").then((module) => module.default)
      }
      loading={Loading}
    />
  </Router>
);
