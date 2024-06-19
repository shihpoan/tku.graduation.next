"use client";
import { useEffect } from "react";
import styles from "./CardStack.module.css";

const CardStack = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(`.${styles.card}`);
    const totalCards = cards.length;
    let currentIndex = 0;

    function animateCards() {
      console.log("aaa");

      // 調整每個卡片的位移和層級
      for (let i = 0; i < totalCards; i++) {
        const nextIndex = (currentIndex + i) % totalCards;
        const distance = i * 20; // 調整位移的距離，每張卡片向左移動 20px

        // 設置每張卡片的位移和層級
        cards[
          nextIndex
        ].style.transform = `translateX(${distance}px) translateY(${
          (i - 1) * -10
        }px)`;
        cards[nextIndex].style.zIndex = totalCards - i + 1;
      }

      // 更新 currentIndex
      currentIndex = (currentIndex + 1) % totalCards;

      // 設置下一次動畫
      setTimeout(animateCards, currentIndex === 1 ? 3000 : 1000); // 第一張卡片等待較長時間
    }

    animateCards();
  }, []);

  return (
    <div className={styles.cardStack}>
      <div className={styles.card}>1</div>
      <div className={styles.card}>2</div>
      <div className={styles.card}>3</div>
      <div className={styles.card}>4</div>
      <div className={styles.card}>5</div>
    </div>
  );
};

export default CardStack;
