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
      className=" backdrop-blur-sm bg-slate-100/5 dark:bg-[#E6E3DA]/5 group cursor-pointer rounded-xl border-slate-600/40 dark:border-white/40 border p-3 space-y-4"
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data?.images?.[0]?.url}
          fill
          alt="Image"
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={
                <Expand
                  size={20}
                  className="text-gray-600 border-gray-200 dark:border-gray-100 dark:text-white"
                />
              }
            />
            <IconButton
              onClick={onAddToCart}
              icon={
                <ShoppingCart
                  size={20}
                  className="text-gray-600 border-gray-200 dark:border-gray-100 dark:text-white"
                />
              }
            />
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
      {/* //added */}
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-white">
          New Product (buy 1 take 3)
        </h3>
        <p className="text-sm text-zinc-400">New Store</p>
        <p className="text-lg font-bold text-white">₱1.00</p>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-[#E6E3DA]/10 hover:bg-[#E6E3DA]/20"
        >
          <Maximize2 className="h-4 w-4" />
        </Button>
        <Button
          className={cn(
            "flex-1 rounded-full",
            "bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700",
            "text-black font-semibold"
          )}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
