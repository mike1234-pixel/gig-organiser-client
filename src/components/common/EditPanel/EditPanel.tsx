import classNames from "classnames";
import { ReactNode } from "react";
import { useTogglePanel } from "../../../context/EditPanel";
import { TfiClose } from "react-icons/tfi";
import styles from "./EditPanel.module.css";

interface EditPanelProps {
  children: ReactNode;
  title: string;
}

export const EditPanel = ({ children, title }: EditPanelProps) => {
  const { setTogglePanel, togglePanel } = useTogglePanel();

  return (
    <div
      className={classNames(
        styles.container,
        togglePanel && styles.containerOpen
      )}
    >
      <div
        className={classNames(styles.panel, togglePanel && styles.panelOpen)}
      >
        <h1 className={styles.title}>{title}</h1>
        {children}
        <button
          onClick={() => setTogglePanel(!togglePanel)}
          className={styles.close}
        >
          <TfiClose />
        </button>
      </div>
    </div>
  );
};
