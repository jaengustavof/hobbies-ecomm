import styles from "./Categories.module.scss";
import { useCategories as getCategories } from "../../hooks/useCategories";
import { StrapiCategory } from "../../types/product";
import CategoryCard from "./CategoryCard";

export default async function Categories() {
  const categories: StrapiCategory[] = await getCategories();

  const cleanCategories = categories.map((category) => {
    const image = category.image;
    const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

    const imageUrl = image?.url
      ? image.url.startsWith("http")
        ? image.url
        : `${baseUrl}${image.url}`
      : undefined;

    return {
      name: category.name,
      slug: category.slug,
      description: category.description,
      imageUrl,
      alt: image?.alternativeText || category.name,
    };
  });

  return (
    <section className={styles.categories}>
      <h2 className={`${styles.categories__title} container`}>Categories</h2>
      <div className={`${styles.categories__grid}`}>
        {cleanCategories.map(({ name, slug, imageUrl, alt }) => (
          <CategoryCard
            key={slug}
            name={name}
            slug={slug}
            imageUrl={imageUrl}
            alt={alt}
          />
        ))}
      </div>
    </section>
  );
}
