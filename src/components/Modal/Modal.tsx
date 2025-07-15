import React, { createContext, ReactNode, useContext } from "react";
import styles from "./Modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
}

const ModalContext = createContext<{ onClose: () => void } | undefined>(
  undefined
);

export const Modal = ({
  isOpen,
  onClose,
  children,
  size = "md",
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <ModalContext.Provider value={{ onClose }}>
      <div className={styles.backdrop}>
        <div className={`${styles.modal} ${styles[size]}`}>{children}</div>
      </div>
    </ModalContext.Provider>
  );
};

Modal.Header = function ModalHeader({ children }: { children?: ReactNode }) {
  const context = useContext(ModalContext);
  if (!context) throw new Error("Modal.Header must be used within Modal");

  return (
    <div className={styles.header}>
      <h2>{children}</h2>
      <button className={styles.closeButton} onClick={context.onClose}>
        &times;
      </button>
    </div>
  );
};

Modal.Body = function ModalBody({ children }: { children: ReactNode }) {
  return <div className={styles.body}>{children}</div>;
};

Modal.Footer = function ModalFooter({ children }: { children: ReactNode }) {
  return <div className={styles.footer}>{children}</div>;
};
