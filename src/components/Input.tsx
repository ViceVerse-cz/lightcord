import { tw } from "twind";
import { FunctionComponent } from "preact";

interface IProps {
  placeholder: string;
  height: string;
  width: string;
  type?: string;
}

const Input: FunctionComponent<IProps> = ({
  placeholder,
  width,
  height,
  type,
}) => {
  return (
    <input
      type={type ? type : "text"}
      placeholder={placeholder}
      class={tw`
        ${width ? "w-" + width : ""}
        ${height ? "h-" + height : ""}
        text(white)
        placeholder(dgray-400)
        p-3
        rounded-md
        border-none
        bg-dgray-200
    `}
    />
  );
};

export default Input;
