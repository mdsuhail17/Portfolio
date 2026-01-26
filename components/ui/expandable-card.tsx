"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface ExpandableCardProps {
  title: string;
  src: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
  classNameExpanded?: string;
  [key: string]: any;
}

export function ExpandableCard({
  title,
  src,
  description,
  children,
  className,
  classNameExpanded,
  ...props
}: ExpandableCardProps) {
  const [active, setActive] = React.useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);
  const id = React.useId();

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(false);
      }
    };

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setActive(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white/50 dark:bg-black/50 backdrop-blur-md h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && (
          <div
            className={cn(
              "fixed inset-0 grid place-items-center z-[100] sm:mt-16 before:pointer-events-none",
            )}
          >
            <motion.div
              layoutId={`card-${title}-${id}`}
              ref={cardRef}
              className={cn(
                "w-full max-w-[850px] h-full flex flex-col overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] sm:rounded-t-3xl bg-gray-900 shadow-sm dark:shadow-none dark:bg-zinc-950 relative",
                classNameExpanded,
              )}
              {...props}
            >
              <motion.div layoutId={`image-${title}-${id}`}>
                <div className="relative before:absolute before:inset-x-0 before:bottom-[-1px] before:h-[70px] before:z-50 before:bg-gradient-to-t dark:before:from-zinc-950 before:from-gray-900">
                  {src === 'eso-ai-text' ? (
                    <div className="w-full h-80 bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
                      <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                        eso.ai
                      </h1>
                    </div>
                  ) : (
                    <img
                      src={src}
                      alt={title}
                      className="w-full h-80 object-cover object-center"
                    />
                  )}
                </div>
              </motion.div>
              <div className="relative h-full before:fixed before:inset-x-0 before:bottom-0 before:h-[70px] before:z-50 before:bg-gradient-to-t dark:before:from-zinc-950 before:from-gray-900">
                <div className="flex justify-between items-start p-6 sm:p-8 h-auto">
                  <div>
                    <motion.p
                    layoutId={`description-${description}-${id}`}
                    className="text-gray-400 dark:text-zinc-400 text-base sm:text-lg"
                  >
                    {description}
                  </motion.p>
                  <motion.h3
                    layoutId={`title-${title}-${id}`}
                    className="font-semibold text-white dark:text-white text-2xl sm:text-3xl md:text-4xl mt-0.5"
                  >
                    {title}
                  </motion.h3>
                  </div>
                  <motion.button
                    aria-label="Close card"
                    layoutId={`button-${title}-${id}`}
                    className="h-10 w-10 shrink-0 flex items-center justify-center rounded-full bg-gray-800 dark:bg-zinc-950 text-white hover:bg-gray-700 dark:hover:bg-neutral-950 dark:text-white/70 border border-gray-700/90 dark:border-zinc-900 hover:border-gray-600/90 hover:text-white dark:hover:text-white dark:hover:border-zinc-800 transition-colors duration-300 focus:outline-none"
                    onClick={() => setActive(false)}
                  >
                    <motion.div
                      animate={{ rotate: active ? 45 : 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                    </motion.div>
                  </motion.button>
                </div>
                <div className="relative px-4 sm:px-6 md:px-8">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-gray-300 dark:text-zinc-400 text-sm sm:text-base pb-10 flex flex-col items-start gap-4 overflow-auto"
                    onClick={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                  >
                    {children}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.div
        role="dialog"
        aria-labelledby={`card-title-${id}`}
        aria-modal="true"
        layoutId={`card-${title}-${id}`}
        onClick={() => setActive(true)}
        className={cn(
                "p-3 sm:p-4 flex flex-col justify-between items-center bg-gray-900 shadow-sm dark:shadow-none dark:bg-zinc-950 rounded-2xl cursor-pointer border border-gray-700/70 dark:border-zinc-900 w-full",
          className,
        )}
      >
        <div className="flex gap-3 sm:gap-4 flex-col w-full">
          <motion.div layoutId={`image-${title}-${id}`} className="w-full">
            {src === 'eso-ai-text' ? (
              <div className="w-full h-48 sm:h-56 rounded-lg bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
                <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                  eso.ai
                </h2>
              </div>
            ) : (
              <img
                src={src}
                alt={title}
                className="w-full h-48 sm:h-56 rounded-lg object-cover object-center"
              />
            )}
          </motion.div>
          <div className="flex justify-between items-center w-full gap-3">
            <div className="flex flex-col flex-1 min-w-0">
              <motion.p
                layoutId={`description-${description}-${id}`}
                className="text-gray-400 dark:text-zinc-400 text-left text-xs sm:text-sm font-medium"
              >
                {description}
              </motion.p>
              <motion.h3
                layoutId={`title-${title}-${id}`}
                className="text-white dark:text-white text-left font-semibold text-base sm:text-lg break-words"
              >
                {title}
              </motion.h3>
            </div>
            <motion.button
              aria-label="Open card"
              layoutId={`button-${title}-${id}`}
              className={cn(
                "h-8 w-8 shrink-0 flex items-center justify-center rounded-full bg-gray-800 dark:bg-zinc-950 text-white hover:bg-gray-700 dark:hover:bg-neutral-950 dark:text-white/70 border border-gray-700/90 dark:border-zinc-900 hover:border-gray-600/90 hover:text-white dark:hover:text-white dark:hover:border-zinc-800 transition-colors duration-300 focus:outline-none",
                className,
              )}
            >
              <motion.div
                animate={{ rotate: active ? 45 : 0 }}
                transition={{ duration: 0.4 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
