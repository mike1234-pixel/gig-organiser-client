import { GrEdit } from "react-icons/gr";
import styles from "./ActionButton.module.css";

interface ActionButtonProps {
  variant: "edit";
}

export const ActionButton = ({ variant }: ActionButtonProps) => {
  const Variant = () => {
    switch (variant) {
      case "edit":
        return (
          <GrEdit
            style={{
              color: "red",
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <button className={styles.root}>
      <Variant />
    </button>
  );
};
