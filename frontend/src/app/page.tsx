import Hero from "@/modules/Home/components/Hero";
import FeaturedProducts from "@/modules/Home/components/FeaturedProducts";
import Categories from "@/modules/Home/components/Categories";
import Table from "@/modules/Home/components/Partners";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <FeaturedProducts />
      <Categories />
      <Table />
    </Fragment>
  );
}
