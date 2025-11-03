import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { ReactNode } from 'react';

type ModalProps = {
  open: boolean;
  title: string;
  description?: string;
  icon?: string;
  onClose: () => void;
  children: ReactNode;
  footer?: ReactNode;
};

export const Modal = ({ open, title, description, icon, onClose, children, footer }: ModalProps) => {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (open && closeButtonRef.current) {
      closeButtonRef.current.focus({ preventScroll: true });
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 flex items-center justify-center bg-dusk/30 backdrop-blur-sm"
          aria-modal="true"
          role="dialog"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 20, stiffness: 220 }}
            className="relative max-h-[80vh] w-[min(90vw,640px)] overflow-y-auto rounded-3xl bg-white/95 p-8 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="absolute right-8 top-6 rounded-full bg-dusk/10 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-dusk/70 transition hover:bg-dusk/20 focus-visible:ring-2 focus-visible:ring-dusk/40"
            >
              Close
            </button>
            <div className="flex items-start gap-3">
              {icon ? <span className="text-2xl" aria-hidden>{icon}</span> : null}
              <div>
                <h2 id="modal-title" className="text-2xl font-semibold text-dusk">
                  {title}
                </h2>
                {description ? (
                  <p id="modal-description" className="mt-1 text-sm text-dusk/70">
                    {description}
                  </p>
                ) : null}
              </div>
            </div>
            <div className="mt-6 space-y-4 text-sm text-soot/80">{children}</div>
            {footer ? <div className="mt-6 flex flex-wrap gap-3">{footer}</div> : null}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
