export interface StrapiImageFormat {
  ext: string;
  url: string;
  width: number;
  height: number;
}

export interface StrapiImage {
  id: number;
  name: string;
  url: string;
  formats?: {
    large?: StrapiImageFormat;
    medium?: StrapiImageFormat;
    small?: StrapiImageFormat;
    thumbnail?: StrapiImageFormat;
  };
}

export interface StrapiCategory {
  id: number;
  name: string;
  slug: string;
}

export interface StrapiProduct {
  id: number;
  name: string;
  slug: string;
  description?: string;
  price?: number;
  stock?: number;
  featured?: boolean;
  image?: StrapiImage;
  category?: StrapiCategory;
}

export interface StrapiCategory {
  id: number;
  name: string;
  slug: string;
  description?: string;
  image?: StrapiImage & {
    alternativeText?: string;
  };
}
