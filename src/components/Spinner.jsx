import { Triangle } from "react-loader-spinner";

const Spinner = ({ color, message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Triangle
        height="50"
        width="50"
        radius="9"
        color={color || "#173A74"}
        ariaLabel="loading"
        // wrapperStyle
        wrapperClass
      />

      <p
        className={` ${
          color ? `text-${color}` : "text-zinc-900"
        } text-sm mt-2 text-center px-2`}
      >
        {message}
      </p>
    </div>
  );
};

export default Spinner;
