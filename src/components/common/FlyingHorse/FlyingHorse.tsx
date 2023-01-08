import { useContext } from "react";
import { FlyingHorseAnimationContext } from "../../../context/Animation/FlyingHorseAnimationContext";
import classNames from "classnames";
import horse from "./horse.svg";
import styles from "./FlyingHorse.module.css";

export const FlyingHorse = () => {
  const { handleAnimationIteration, animationTriggered } = useContext(
    FlyingHorseAnimationContext
  );

  return (
    <div>
      <img
        src={horse}
        alt="horse"
        className={
          animationTriggered
            ? classNames(styles.horse, styles.fly)
            : styles.horse
        }
        onAnimationEnd={handleAnimationIteration}
      />
    </div>
  );
};
