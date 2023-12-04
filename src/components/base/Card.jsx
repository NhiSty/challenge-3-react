import PropTypes from "prop-types";
import cn from "classnames";

function Card({ children, classNames }) {
  return (
    <div
      className={cn(
        "bg-glass bg-white/5 backdrop-blur-md rounded-2xl border border-white border-opacity-10 p-8 shadow-lg",
        "transition-all transform-gpu relative",
        "hover:shadow-xl hover:scale-[102%]",
        classNames
      )}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.object,
  classNames: PropTypes.string,
};

export default Card;
