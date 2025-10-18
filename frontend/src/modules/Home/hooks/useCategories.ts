import type { StrapiCategory } from "../types/product";

export async function useCategories(): Promise<StrapiCategory[]> {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

  if (!baseUrl)
    throw new Error("Missing NEXT_PUBLIC_STRAPI_URL environment variable");

  const res = await fetch(`${baseUrl}/api/categories?populate=*`, {
    next: { revalidate: 14400 }, // cada 4 horas
  });

  if (!res.ok) throw new Error(`Failed to fetch categories: ${res.statusText}`);

  const data = await res.json();

  return data.data || [];
}
