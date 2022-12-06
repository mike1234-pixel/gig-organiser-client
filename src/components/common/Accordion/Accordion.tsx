import { useState, ReactNode } from "react";
import classNames from "classnames";
import styles from "./Accordion.module.css";
import { MdKeyboardArrowUp } from "react-icons/md";

type AccordionProps = {
  title: string;
  content: string | ReactNode;
};

export const Accordion = ({ title, content }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={styles.root}>
      <button
        className={classNames(
          styles.accordionButton,
          isOpen && styles.accordionButtonActive
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <MdKeyboardArrowUp className={styles.carat} />
      </button>
      <div
        className={classNames(
          styles.accordionContent,
          isOpen && styles.accordionContentActive
        )}
      >
        {content}
      </div>
    </div>
  );
};
