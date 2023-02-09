import classNames from "classnames";
import { changeLanguage } from "i18next";
import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import styles from "./LanguageSwitch.module.css"

export const LanguageSwitch = () => {

    const { i18n } = useTranslation();
    const language = i18n.language;

    const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
        changeLanguage(e.target.value);
    };

    return (
        <select value={language} onChange={handleLanguageChange} className={classNames(styles.select, styles[language])}>
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
        </select>
    );
};