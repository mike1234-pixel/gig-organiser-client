import { GrEdit } from "react-icons/gr";
import styles from "./ActionButton.module.css";

interface ActionButtonProps {
  variant: "edit";
  onClick: (arg: any) => void;
}

export const ActionButton = ({ variant, onClick }: ActionButtonProps) => {
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
    <button className={styles.root} onClick={onClick}>
      <Variant />
    </button>
  );
};
