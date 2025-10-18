import { Fragment } from "react";

import styles from "./CategoryCard.module.scss";

type CategoryCardProps = {
  name: string;
  slug: string;
  imageUrl?: string;
  alt?: string;
};

export default function CategoryCard({
  name,
  slug,
  imageUrl,
  alt,
}: CategoryCardProps) {
  return (
    <div key={slug} className={styles["category-card"]}>
      {imageUrl && (
        <Fragment>
          <img
            src={imageUrl}
            alt={alt}
            className={styles["category-card__image"]}
          />
          <div className={styles["category-card__overlay"]} />
        </Fragment>
      )}
      <h3 className={styles["category-card__title"]}>{name}</h3>
    </div>
  );
}
