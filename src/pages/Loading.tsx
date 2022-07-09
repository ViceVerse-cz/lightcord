import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { tw } from "twind";

const Loading = () => {
  return (
    <div class={tw`grid h-screen place-items-center animate-spin`}>
      <FontAwesomeIcon size={"4x"} icon={faCircleNotch} />
    </div>
  );
};

export default Loading;
