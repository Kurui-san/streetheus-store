"use client";

import { Button } from "@/components/ui/button";
import { Button as MovingButton } from "./ui/moving-border";
import useCart from "@/hooks/use-cart";
import { Menu, ShoppingBag, TableProperties, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { urls } from "./main-nav";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-0 md:ml-auto flex flex-1 items-center gap-x-1 md:gap-x-4 md:pr-2">
      <div className="lg:hidden flex items-center gap-x-1 ml-auto pr-2">
        {/* Mobile Menu */}
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="biege" className="bg-[#F2E3CF]" size="icon">
              {isOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-[#E6E3DA]">
            <div className="flex flex-col md:hidden items-center space-x-4 lg:space-x-6">
              {urls.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "text-sm font-medium transition-colors bg-clip-text hover:text-transparent text-white hover:bg-no-repeat hover:bg-gradient-to-r hover:from-[#D2B48C] hover:to-[#EEDC82]"
                    // route.active
                    //   ? "relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500"
                    //   : "text-muted-foreground"
                  )}
                >
                  {route.label}
                </Link>
              ))}
            </div>
            {/* <DropdownMenuItem onClick={() => router.push("/cart")}>
              <ShoppingBag className="mr-2 h-4 w-4" />
              Cart ({cart.items.length})
            </DropdownMenuItem>
            <SignedIn>
              <DropdownMenuItem onClick={() => router.push("/order")}>
                <TableProperties className="mr-2 h-4 w-4" />
                Orders
              </DropdownMenuItem>
            </SignedIn>
            <SignedOut>
              <DropdownMenuItem asChild>
                <SignInButton mode="modal">Sign In</SignInButton>
              </DropdownMenuItem>
            </SignedOut> */}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-x-4 ml-auto">
        {/* <button onClick={() => router.push("/cart")} className="p-[3px] relative flex items-center gap-x-2">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                    <div className="px-8 py-2 bg-[#E6E3DA] dark:bg-[#020817] flex items-center  rounded-full  relative group transition duration-200 text-white hover:bg-transparent dark:hover:bg-transparent group">
                        <ShoppingBag
                            size={20}
                            className="text-[#020817] group-hover:text-white dark:text-white"
                        />
                        <span className="ml-2 text-sm font-medium text-[#020817] group-hover:text-white dark:text-white">
                            {cart.items.length}
                        </span>
                    </div>
                </button>
                <SignedIn>
                    <button onClick={() => router.push("/order")} className="p-[3px] relative flex items-center gap-x-2">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                        <div className="px-8 py-2 bg-[#E6E3DA] dark:bg-[#020817] flex items-center  rounded-full  relative group transition duration-200 text-white hover:bg-transparent dark:hover:bg-transparent group">
                            <TableProperties
                                size={20}
                                className="text-[#020817] group-hover:text-white dark:text-white"
                            />
                        </div>
                    </button>
                    <UserButton afterSignOutUrl="/" />
                </SignedIn>
                <SignedOut>
                    <SignInButton mode="modal">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded">
                        Sign In
                    </button>
                    </SignInButton>
                </SignedOut> */}
      </div>
    </div>
  );
};

export default NavbarActions;
