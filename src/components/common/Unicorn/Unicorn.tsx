import classNames from "classnames";
import { useContext, useState } from "react";
import unicorn from "./unicorn.png";
import styles from "./Unicorn.module.css";
import { SuccessAnimationContext } from "../../../context/SuccessAnimationContext";

export const Unicorn = () => {
  const { handleAnimationIteration, animationTriggered } = useContext(
    SuccessAnimationContext
  );

  return (
    <div>
      <img
        src={unicorn}
        alt="unicorn"
        className={
          animationTriggered
            ? classNames(styles.unicorn, styles.fly)
            : styles.unicorn
        }
        onAnimationEnd={handleAnimationIteration}
      />
    </div>
  );
};
