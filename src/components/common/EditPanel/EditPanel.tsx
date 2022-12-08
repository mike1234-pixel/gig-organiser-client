import classNames from "classnames";
import { ReactNode } from "react";
import { useTogglePanel } from "../../../context/EditPanel";
import styles from "./EditPanel.module.css";

interface EditPanelProps {
  children: ReactNode;
}

export const EditPanel = ({ children }: EditPanelProps) => {
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
        {children}
        <button onClick={() => setTogglePanel(!togglePanel)}>close</button>
      </div>
    </div>
  );
};
