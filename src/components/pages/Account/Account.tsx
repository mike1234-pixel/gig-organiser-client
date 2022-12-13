import { useAuth } from "../../../context/AuthContext";
import { useDeleteUser } from "../../../hooks/useDeleteUser";
import { Button } from "../../common/Button";
import { ErrorState } from "../../common/ErrorState";
import { LayoutPage } from "../../common/LayoutPage";
import { useNavigate } from "react-router-dom";
import { AiOutlineUserDelete } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import styles from "./Account.module.css";

export const Account = () => {
  const { user, setUser } = useAuth();

  const { mutate, error, isSuccess } = useDeleteUser();

  const { t } = useTranslation();

  const navigate = useNavigate();

  if (error)
    return (
      <LayoutPage>
        <ErrorState title="Error" text="Could not delete user" />
      </LayoutPage>
    );

  if (isSuccess) {
    setUser(null);
    navigate("/");
  }

  return (
    <>
      {user && (
        <LayoutPage>
          <h1 className={styles.title}>{t("account.title")}</h1>
          <div className={styles.summary}>
            <p>{t("account.summary.one")}</p>
            <p>{t("account.summary.two")}</p>
            <p>{t("account.summary.three")}</p>
            <hr className={styles.rule} />
            <h2 className={styles.subtitle}>{t("account.subtitle")}</h2>
            <p>
              {t("account.name")}: {user?.name}
            </p>
            <p>
              {t("account.email")}: {user?.email}
            </p>
            <Button variant="danger" onClick={() => mutate(user)}>
              {t("account.delete")} <AiOutlineUserDelete />
            </Button>
          </div>
        </LayoutPage>
      )}
    </>
  );
};
