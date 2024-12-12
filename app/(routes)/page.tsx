import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import HomeBillboard from "@/components/home-billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("3e1f8812-0d91-48c6-8e85-a2a7ccaead4c");

  const imagesArray = [
    billboard.imageUrl,
    ...products.map((product: any) => product.images[0].url),
  ];

  return (
    <div className="relative bg-[url('/beige-bg.png')] bg-cover bg-center bg-[#FDF0DA]">
      <Container>
        <div className="space-y-10 pb-10">
          <HomeBillboard images={imagesArray} data={billboard} />
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="Featured Products" items={products} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
