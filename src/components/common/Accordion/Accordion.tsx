import { useState, ReactNode } from "react";
import classNames from "classnames";
import styles from "./Accordion.module.css";

type AccordionProps = {
  title: string;
  content: string | ReactNode;
};

export const Accordion = ({ title, content }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={styles.root}>
      <button
        className={
          isOpen
            ? classNames(styles.accordionButton, styles.accordionButtonActive)
            : styles.accordionButton
        }
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      {isOpen && <div className={styles.accordionContent}>{content}</div>}
    </div>
  );
};
