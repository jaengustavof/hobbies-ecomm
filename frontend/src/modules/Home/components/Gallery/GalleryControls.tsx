"use client";
import { useRef } from "react";
import styles from "./Gallery.module.scss";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function GalleryControls() {
  const leftButtonRef = useRef<HTMLButtonElement>(null);
  const rightButtonRef = useRef<HTMLButtonElement>(null);
  const parentContainer = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const scrollWidth = (
      parentContainer.current?.parentElement?.children[0]
        .children[0] as HTMLElement
    )?.offsetWidth;

    const scrollAmount = direction === "left" ? -scrollWidth : scrollWidth;

    const parentEl = parentContainer.current?.parentElement?.children[0];

    if (parentEl) {
      parentEl.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`${styles["gallery__button-container"]}`}
      ref={parentContainer}
    >
      <button
        className={`${styles["gallery__button"]}`}
        ref={leftButtonRef}
        onClick={() => scroll("left")}
      >
        <ArrowLeft className={`${styles["gallery__arrow"]}`} />
      </button>
      <button
        className={`${styles["gallery__button"]}`}
        ref={rightButtonRef}
        onClick={() => scroll("right")}
      >
        <ArrowRight className={`${styles["gallery__arrow"]}`} />
      </button>
    </div>
  );
}
