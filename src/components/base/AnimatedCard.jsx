import PropTypes from "prop-types";
import cn from "classnames";
import { useEffect } from "react";
import { useRef } from "react";
import VanillaTilt from "vanilla-tilt";

function AnimatedCard({ children, classNames }) {
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, {
      max: 5,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });
  }, [tilt]);

  return (
    <div
      ref={tilt}
      className={cn(
        "bg-glass bg-white/5 backdrop-blur-md rounded-2xl border border-white border-opacity-10 p-8 shadow-lg",
        "transition-all transform-gpu relative",
        "hover:shadow-xl hover:scale-[102%]",
        classNames,
      )}
    >
      {children}
    </div>
  );
}

AnimatedCard.propTypes = {
  children: PropTypes.object,
  classNames: PropTypes.string,
};

export default AnimatedCard;
