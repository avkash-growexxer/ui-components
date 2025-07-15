import React, { ReactNode, useEffect, useRef, useState } from "react";
import styles from "./Tooltip.module.scss";

interface TooltipProps {
  text: string;
  position?: "top" | "bottom" | "left" | "right";
  children: ReactNode;
  className?: string;
  trigger?: "hover" | "click";
}

const Tooltip: React.FC<TooltipProps> = ({
  text,
  position = "top",
  children,
  className = "",
  trigger = "hover",
}) => {
  const [visible, setVisible] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (trigger !== "click" || !visible) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [visible, trigger]);

  const handleToggle = () => {
    if (trigger === "click") {
      setVisible((prev) => !prev);
    }
  };

  const eventHandlers =
    trigger === "hover"
      ? {
          onMouseEnter: () => setVisible(true),
          onMouseLeave: () => setVisible(false),
          onFocus: () => setVisible(true),
          onBlur: () => setVisible(false),
        }
      : {
          onClick: handleToggle,
        };

  return (
    <div
      ref={wrapperRef}
      className={`${styles.wrapper} ${className}`}
      tabIndex={0}
      // onMouseEnter={() => setVisible(true)}
      // onMouseLeave={() => setVisible(false)}
      // onFocus={() => setVisible(true)}
      // onBlur={() => setVisible(false)}
      {...eventHandlers}
    >
      {children}
      {visible && (
        <div className={`${styles.tooltip} ${styles[position]}`}>{text}</div>
      )}
    </div>
  );
};

export default Tooltip;
