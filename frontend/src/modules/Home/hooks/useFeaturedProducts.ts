import type { StrapiProduct } from "../types/product";

export async function useFeaturedProducts(): Promise<StrapiProduct[]> {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

  if (!baseUrl)
    throw new Error("Missing NEXT_PUBLIC_STRAPI_URL environment variable");

  const res = await fetch(
    `${baseUrl}/api/products?filters[featured][$eq]=true&populate=*`,
    {
      // ✅ Revalida cada 4 horas (14400 segundos)
      next: { revalidate: 14400 },
    }
  );

  if (!res.ok)
    throw new Error("Failed to fetch featured products: ${res.statusText}");

  const data = await res.json();

  return data.data || [];
}
