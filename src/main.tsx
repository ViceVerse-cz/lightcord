import { render } from "preact";
import { App } from "./App";
import { apply, setup } from "twind";

setup({
  hash: false, // hash all generated class names (default: false)
  darkMode: "class", // use a different dark mode strategy (default: 'media')
  preflight: {
    // "@import": `url('src/assets/fonts/main.woff2') format("woff2")`,
    // "@font-face": [
    //   {
    //     fontFamily: "main",
    //     fontWeight: "300",
    //     src: 'url(./assets/fonts/main.woff2) format("woff")',
    //   },
    // ],
    body: apply`bg-dgray-300 text-white m-0 p-0 overflow-hidden`,
    h1: apply`text(white uppercase)`,
  },
  theme: {
    extend: {
      colors: {
        dgray: {
          100: "#6c757d",
          200: "#424549",
          300: "#36393e",
          400: "#282b30",
          500: "#36393e",
        },
        dblue: {
          100: "#7289da",
        },
      },
    },
  },
});

render(<App />, document.getElementById("app")!);
