import { FunctionComponent, ComponentChildren } from "preact";
import { tw } from "twind";

interface IProps {
  type: string;
  children: ComponentChildren;
}

const Button: FunctionComponent<IProps> = ({ type, children }: IProps) => {
  return (
    <button
      type={type}
      class={tw`
        bg-dblue-100 
        p-2 h-10 
        w-[75%]
        mt-3
        rounded-md
        outline-none
        hover:bg-blue-600
        transition-all duration-200
        `}
    >
      {children}
    </button>
  );
};

export default Button;
