import { tw } from "twind";
import { useState } from "preact/hooks";
import Input from "../components/Input";
import Button from "../components/Button";

function Auth() {
  const [token, setToken] = useState("");

  return (
    <>
      <form
        class={tw`
        justify-center
        flex
        mt-20
        flex-col
        items-center
        px-10
        text-center
      `}
      >
        <div class={tw`py-8 px-12 bg-dgray-400 rounded-md`}>
          <h1 class={tw`text-3xl font-bold`}>Welcome back!</h1>
          <p class={tw`mb-10 text(xl)`}>Login with your discord token</p>

          <Input
            height={"8"}
            width={"[90%]"}
            placeholder="Token"
            type="password"
          ></Input>

          <Button type="submit">Login</Button>
        </div>
      </form>
    </>
  );
}

export default Auth;
