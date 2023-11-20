import { forwardRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export const Input = forwardRef(
  ({ id, label, error, className, ...props }, ref) => {
    return (
      <div className={classNames("relative mb-6 group", className)}>
        {label && (
          <label
            htmlFor={id}
            className="font-semibold text-gray-700 text-sm group-focus-within:text-purple-500 leading-8"
          >
            {label}
          </label>
        )}
        <div className="relative group">
          <input
            {...props}
            placeholder={props.placeholder || label}
            id={id}
            ref={ref}
            aria-invalid={error ? "true" : "false"}
            className={classNames(
              "transition-all duration-100",
              "py-2.5 px-3 w-full h-full outline-none border border-gray-300 rounded-lg shadow-xs",
              "disabled:bg-gray-100 disable:text-gray-500",

              "placeholder:text-gray-500 placeholder:transition-all placeholder:duration-100",
              "placeholder-shown:placeholder:opacity-100 placeholder:opacity-0",

              // errors
              "invalid:border-red-500",
              error
                ? "border-red-500 focus:ring-2 ring-red-500 ring-offset-2"
                : "group-focus-within:border-purple-500",

              {
                "pl-10": props.icon,
              },
            )}
          />

          <div
            className={classNames(
              "absolute pointer-events-none inset-y-0 left-0 flex items-center pl-3 text-gray-500 peer-disabled:text-gray-500",
              error ? "text-red-500" : "group-focus-within:text-purple-500",
            )}
            aria-hidden="true"
          >
            {props.icon}
          </div>
        </div>
        {error && (
          <span className="text-sm text-red-500 px-2 absolute -bottom-6">
            {error}
          </span>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.node,
};
