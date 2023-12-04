import PropTypes from "prop-types";
import cn from "classnames";

function Button({
  children,
  classNames,
  effects = true,
  bgColor = "bg-white",
  bgOpacity = "bg-opacity-5",
  ...props
}) {
  let effectsClasses = "";
  if (effects) {
    effectsClasses = [
      "before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:-bottom-1",
      "before:w-8 before:h-3 before:bg-primary-400 before:rounded-lg before:duration-500",

      "after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-top-1",
      "after:w-8 after:h-3 after:bg-primary-400 after:rounded-lg after:duration-500",

      "hover:before:left-1/2 hover:before:h-1/2 hover:before:w-4/5 hover:before:rounded-3xl hover:before:duration-500 hover:before:bottom-0",
      "hover:after:left-1/2 hover:after:h-1/2 hover:after:w-4/5 hover:after:rounded-3xl hover:after:duration-500 hover:after:top-0",

      "before:shadow-[0_0_5px_var(--tw-shadow-color),0_0_30px_var(--tw-shadow-color),0_0_60px_var(--tw-shadow-color)]",
      "after:shadow-[0_0_5px_var(--tw-shadow-color),0_0_30px_var(--tw-shadow-color),0_0_60px_var(--tw-shadow-color)]",
      "before:shadow-primary-400 after:shadow-primary-400",
    ].join(" ");
  } else {
    effectsClasses = [
      "before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:bg-transparent",
      "hover:before:bg-primary-400 before:duration-500",

      "hover:before:shadow-[0_0_5px_var(--tw-shadow-color),0_0_30px_var(--tw-shadow-color)]",
      "hover:before:shadow-primary-400",
    ].join(" ");
  }

  return (
    <button
      className={cn(
        "relative group",

        effectsClasses,

        classNames,
      )}
      {...props}
    >
      <span
        className={cn(
          "relative px-5 py-2 backdrop-blur-md top-0 left-0 w-full h-full border border-white border-opacity-10",
          "shadow-lg flex justify-center items-center rounded-full",
          bgColor,
          bgOpacity,
          "z-[1] text-white overflow-hidden transition-all duration-500",

          "before:content-[''] before:absolute before:top-0 before:left-0",
          "before:w-1/2 before:h-full before:bg-gradient-to-l before:from-[rgba(255,255,255,0.15)] before:to-transparent",
          "before:skew-x-[45deg] before:translate-x-0 before:duration-500",
          "group-hover:before:translate-x-[200%]",
        )}
      >
        {children}
      </span>
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  classNames: PropTypes.string,
  effects: PropTypes.bool,

  bgColor: PropTypes.string,
  bgOpacity: PropTypes.string,
};

export default Button;
