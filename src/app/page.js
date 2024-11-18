import Blog from "@/components/homeSection/blog";
import Gallary from "@/components/homeSection/gallary";
import Hero from "@/components/homeSection/hero";
import Product from "@/components/homeSection/product";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero/>
      <Gallary/>
      <Product/>
      <Blog/>
    </>
  );
}
