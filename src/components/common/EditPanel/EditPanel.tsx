import { ReactNode, useRef } from "react";
import { useTogglePanel } from "../../../context/TogglePanelContext";
import { TfiClose } from "react-icons/tfi";
import classNames from "classnames";
import styles from "./EditPanel.module.css";

interface EditPanelProps {
  children: ReactNode;
  title: string;
}

export const EditPanel = ({ children, title }: EditPanelProps) => {
  const { setTogglePanel, togglePanel } = useTogglePanel();
  const panelRef = useRef<HTMLDivElement>(null);

  const handleContainerClick = (event: React.MouseEvent) => {
    if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
      setTogglePanel(!togglePanel);
    }
  };

  return (
    <div
      className={classNames(
        styles.container,
        togglePanel && styles.containerOpen
      )}
      onClick={handleContainerClick}
    >
      <div
        className={classNames(styles.panel, togglePanel && styles.panelOpen)}
        ref={panelRef}
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
