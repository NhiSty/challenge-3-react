import PropTypes from "prop-types";
import cn from "classnames";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import  Button  from "@components/base/Button";
import { useCallback } from "react";

function Modal({
  open = false,
  onClose,
  withSaveButton = false,
  children,
  className,
  title,
  ...props
}) {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (open) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [open]);

  const onCancel = useCallback(
    (event) => {
      event.preventDefault();
      onClose?.("cancel");
    },
    [onClose],
  );

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      onClose?.("submit");
    },
    [onClose],
  );

  return (
    <dialog
      ref={ref}
      {...props}
      onCancel={onCancel}
      className={cn(
        "backdrop:bg-gray-800/60",
        "invisible opacity-0 open:visible open:opacity-100 open:transition-all open:duration-100 ease-out",

        "top-0 left-0 w-full md:max-w-screen-sm z-50 md:flex md:flex-col md:justify-center",

        "bg-glass bg-white/5 text-white rounded-2xl border border-white border-opacity-20 shadow-lg",
        "transition-all transform-gpu relative",
        className,
      )}
    >
      <form method="dialog" onSubmit={onSubmit} onReset={onCancel}>
        <header className="px-8 py-4 flex flex-row items-center border-b border-white border-opacity-20 backdrop-blur-sm rounded-t-2xl">
          <h1 className="font-bold text-2xl flex-1">{title}</h1>
          <button
            id="close"
            aria-label="close"
            className="btn p-2 rounded-full hover:bg-gray-400 hover:bg-opacity-20"
            type="reset"
          >
            <X />
          </button>
        </header>

        <main className="backdrop-blur-lg px-8 py-4 bg-white/10">
          {children}
        </main>

        <footer
          className={cn(
            "border-t border-white border-opacity-20 backdrop-blur-md rounded-b-2xl p-4",
          )}
        >
          <menu className="flex flex-row-reverse gap-4">
            {withSaveButton && (
              <Button
                effects={false}
                bgColor="bg-primary-400"
                bgOpacity="bg-opacity-50"
                type="submit"
              >
                Save
              </Button>
            )}
            <Button effects={false} type="reset">
              Cancel
            </Button>
          </menu>
        </footer>
      </form>
    </dialog>
  );
}

Modal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  withSaveButton: PropTypes.bool,
  children: PropTypes.object,
  className: PropTypes.string,
  title: PropTypes.string,
};

export default Modal;
