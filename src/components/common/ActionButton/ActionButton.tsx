import { GrEdit } from "react-icons/gr";
import { MdOutlineDeleteOutline } from "react-icons/md";
import styles from "./ActionButton.module.css";

interface ActionButtonProps {
  variant: "edit" | "delete";
  onClick?: (arg: any) => void;
}

export const ActionButton = ({ variant, onClick }: ActionButtonProps) => {
  const Variant = () => {
    switch (variant) {
      case "edit":
        return <GrEdit />;
      case "delete":
        return <MdOutlineDeleteOutline />;
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
