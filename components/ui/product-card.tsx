"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";
import { Expand, Maximize2, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

import { Product } from "@/types";
import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const cart = useCart();
  const previewModal = usePreviewModal();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };

  return (
    <div
      onClick={handleClick}
      className=" backdrop-blur-sm dark:bg-[#E6E3DA]/5 group cursor-pointer rounded-xl dark:border-white/40 border p-3 space-y-4 bg-gradient-to-r from-[#947a70] to-[#bd9d92]  border-[#D7BE9A]"
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data?.images?.[0]?.url}
          fill
          alt="Image"
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-3 bottom-3">
          <div className="flex gap-x-6 justify-start">
            <IconButton
              onClick={onPreview}
              icon={
                <Expand
                  size={20}
                  className="text-white border-gray-200 dark:border-gray-100 dark:text-white"
                />
              }
            />
            {/* <IconButton
              onClick={onAddToCart}
              icon={
                <ShoppingCart
                  size={20}
                  className="text-gray-600 border-gray-200 dark:border-gray-100 dark:text-white"
                />
              }
            /> */}
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-lg text-black">{data.name}</p>
        <p className="text-sm text-black">{data.category?.name}</p>
      </div>
      <div className="flex items-center justify-between text-black">
        <Currency value={data?.price} />
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-[#E6E3DA]/10 hover:bg-[#E6E3DA]/20"
        >
          <Maximize2 className="h-4 w-4 text-white" />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
