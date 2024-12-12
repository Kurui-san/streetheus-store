"use client";

import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import {Button} from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import useCart from "@/hooks/use-cart";

interface InfoProps {
    data: Product;
}

const Info: React.FC<InfoProps> = ({
    data
}) => {
    const cart = useCart();

    const onAddToCart = () => {
        cart.addItem(data);
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-white">{data.name}</h1>
            <div className="mt-3 flex items-end justify-between">
                <p className="text-2xl text-white">
                    <Currency value={data?.price} />
                </p>
            </div>
            <hr className="my-4" />
            <div className="flex flex-col gap-y-6">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-white">Size:</h3>
                    <div className="text-white">
                        {data?.size?.name} ({data?.size?.value})
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-white">Color:</h3>
                    <div className="h-6 w-6 rounded-full border border-white" style={{ backgroundColor: data?.color?.value }} />
                </div>
            </div>
            {/* <div className="mt-10 flex items-center gap-x-3">
                <button onClick={onAddToCart} className="p-[3px] relative flex items-center gap-x-2">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                    <div className="px-8 py-2  bg-black dark:bg-[#020817] rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent dark:hover:bg-transparent">
                        Add to Cart
                    </div>
                </button>
            </div> */}
        </div>
    );
}
 
export default Info;