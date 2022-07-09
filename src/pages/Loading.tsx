import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLadderWater } from "@fortawesome/free-solid-svg-icons";
import { tw } from "twind";

const Loading = () => {
  return (
    <div class={tw`text-center w-[100%] animate-spin`}>
      <FontAwesomeIcon icon={faLadderWater} />
    </div>
  );
};

export default Loading;
