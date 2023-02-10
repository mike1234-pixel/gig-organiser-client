import { useContext } from "react";
import { ConfettiAnimationContext } from "../../../context/Animation/ConfettiAnimationContext";
import Confetti from "react-confetti";
import styles from "./Confetti.module.css";

export const ConfettiEffect = () => {
  const { renderConfetti, confettiPieces } = useContext(
    ConfettiAnimationContext
  );

  const width = window.innerWidth;
  const height = window.innerHeight;

  if (!renderConfetti) return null;

  return (
    <div className={styles.container}>
      <Confetti numberOfPieces={confettiPieces} width={width} height={height} data-testid={confettiPieces} />
    </div>
  );
};
