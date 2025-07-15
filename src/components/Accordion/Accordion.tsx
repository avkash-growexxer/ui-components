import React, { useState, ReactNode } from "react";
import styles from "./Accordion.module.scss";

export interface AccordionItemProps {
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItemProps[];
  allowMultipleOpen?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultipleOpen = false,
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleIndex = (index: number) => {
    if (allowMultipleOpen) {
      setOpenIndexes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev[0] === index ? [] : [index]));
    }
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        return (
          <div key={index} className={styles.item}>
            <button
              className={styles.header}
              onClick={() => toggleIndex(index)}
            >
              {item.title}
              <span className={styles.icon}>{isOpen ? "-" : "+"}</span>
            </button>
            {isOpen && <div className={styles.content}>{item.content}</div>}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
