import classNames from "classnames";
import { forwardRef } from "react";
import PropTypes from "prop-types";

export const Button = forwardRef(
  (
    {
      children,
      icon: Icon,
      iconClassName,
      className,
      type = "button",
      ...props
    },
    ref,
  ) => {
    const classes = classNames(
      "px-4 py-2 rounded-lg motion-safe:transition-all duration-150",
      "outline-offset-2 outline-2 focus:outline",

      "disabled:cursor-not-allowed disabled:opacity-75",
      "inline-grid grid-flow-col gap-2 items-center",

      "drop-shadow-sm",
      "enabled:active:scale-95 enabled:active:drop-shadow-md",

      "disabled:cursor-not-allowed disabled:opacity-75",

      "bg-purple-500 hover:bg-purple-400 text-white",
      "outline-purple-500",

      className,
    );

    return (
      <button ref={ref} type={type} {...props} className={classes}>
        {Icon && <Icon className={classNames("w-6 h-6", iconClassName)} />}
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

Button.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.elementType,
  iconClassName: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};
