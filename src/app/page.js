import Image from "next/image";
import Banner from "./components/banner/Banner";
import Browse from "./components/browse/Browse";
import Product from "./components/product/Product";

export default function Home() {
  return (
 <>
 <Banner />
 <Browse/>
 <Product/>
 </>
  );
}
