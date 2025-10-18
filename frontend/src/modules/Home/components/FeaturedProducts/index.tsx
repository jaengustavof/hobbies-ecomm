import styles from "./FeaturedProducts.module.scss";
import { useFeaturedProducts } from "../../hooks/useFeaturedProducts";
import type { StrapiProduct } from "../../types/product";
import Gallery from "../Gallery";
import ProductCard from "../ProductCard";

export default async function FeaturedProducts() {
  const products: StrapiProduct[] = await useFeaturedProducts();

  const cleanProducts = products.map((product) => {
    return {
      name: product.name,
      category: product.category?.name || "No category",
      image: product.image?.formats?.medium?.url
        ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${product.image.formats.medium.url}`
        : null,
      description: product.description,
      price: product.price,
    };
  });

  return (
    <section className={`${styles.featured}`}>
      <h2 className={`${styles.featured__title} container`}>
        Featured Products
      </h2>
      <Gallery>
        {cleanProducts.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            category={product.category}
            image={product.image}
            description={product.description}
            price={product.price}
          />
        ))}
      </Gallery>
    </section>
  );
}
