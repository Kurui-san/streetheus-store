import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import HomeBillboard from "@/components/home-billboard";
import ProductList from "@/components/product-list";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonial";
import Container from "@/components/ui/container";
import { Amiko } from "next/font/google";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("3e1f8812-0d91-48c6-8e85-a2a7ccaead4c");

  const imagesArray = [
    billboard.imageUrl,
    ...products.map((product: any) => product.images[0].url),
  ];

  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "From Raya Lyn",
      designation: "Tiktok Buyer",
      src: "/rate/rate1.png",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "From Maddi",
      designation: "Tiktok Buyer",
      src: "/rate/rate2.png",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "From babablacksheep",
      designation: "Tiktok Buyer",
      src: "/rate/rate3.png",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "From Mommy Ann",
      designation: "Tiktok Buyer",
      src: "/rate/rate4.png",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "From Christine Yabo",
      designation: "Tiktok Buyer",
      src: "/rate/rate5.png",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "From Maria Krista",
      designation: "Tiktok Buyer",
      src: "/rate/rate6.png",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "From AJ DS",
      designation: "Tiktok Buyer",
      src: "/rate/rate7.png",
    },
  ];

  return (
    <div className="relative bg-[url('/beige-bg.png')] bg-cover bg-center bg-[#FDF0DA]">
      <Container>
        <div className="space-y-10 pb-10">
          <HomeBillboard images={imagesArray} data={billboard} />
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="Featured Products" items={products} />
            <AnimatedTestimonials testimonials={testimonials} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
