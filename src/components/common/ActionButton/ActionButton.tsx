import { GrEdit } from "react-icons/gr";
import { MdOutlineDeleteOutline } from "react-icons/md";
import styles from "./ActionButton.module.css";

interface ActionButtonProps {
  variant: "edit" | "delete";
  onClick?: () => void;
}

interface VariantProps {
  variant: ActionButtonProps['variant'];
}

const Variant = ({ variant }: VariantProps) => {
  switch (variant) {
    case "edit":
      return <GrEdit data-testid={variant} />;
    case "delete":
      return <MdOutlineDeleteOutline data-testid={variant} />;
    default:
      return null;
  }
};

export const ActionButton = ({ variant, onClick }: ActionButtonProps) => {
  return (
    <button className={styles.root} onClick={onClick} data-testid={'action-button'}>
      <Variant variant={variant} />
    </button>
  );
};
