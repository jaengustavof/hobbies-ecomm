import styles from "./ProductCard.module.scss";
import Image from "next/image";

type ProductCardProps = {
  name: string;
  image: string | null;
  category: string | undefined;
  description: string | undefined;
  price: number | undefined;
};

export default function ProductCard({
  name,
  image,
  category,
  description,
  price,
}: ProductCardProps) {
  return (
    <div className={`${styles.card}`}>
      <Image
        src={image || "https://picsum.photos/360/300"}
        height={360}
        width={300}
        alt="Image"
        className={`${styles["card__image"]}`}
      />
      <h3 className={`${styles["card__title"]}`}>{name}</h3>
      <p className={`${styles["card__description"]}`}>{description || ""}</p>
      <div className={`${styles["card__price-container"]}`}>
        <div className={`${styles["card__price"]}`}>
          <p className={`${styles["card__text"]}`}>Price: </p>
          <p className={`${styles["card__amount"]}`}>
            {price ? `€${price.toFixed(2)}` : "N/A"}
          </p>
        </div>
        <button className={`${styles["card__cta"]}`}>Add to cart</button>
      </div>
    </div>
  );
}
