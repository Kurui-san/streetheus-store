"use client";

import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import { useEffect, useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown, Home, Store } from "lucide-react";
import { usePathname } from "next/navigation";

interface MainNavProps {
  data?: Category[];
}

const href = [
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
];

export const urls = href.map((route) => ({
  href: route.href,
  label: route.label,
}));

const MainNav: React.FC<MainNavProps> = ({ data = [] }) => {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const [id, setId] = useState("");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (typeof pathname === "string") {
      const idFromPath = pathname.split("/").pop();
      if (idFromPath) {
        setId(idFromPath);
      }
    }
  }, [pathname]);

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  if (!isMounted) {
    return null;
  }

  return (
    <nav className="mx-2 md:mx-6 flex items-center">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="biege"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between  text-white dark:text-gray-200  transition-colors duration-200"
          >
            <Store className="mr-2 h-4 w-4" />
            <span className="flex-1 text-left truncate">
              {id && data
                ? data.find((route) => route.id === id)?.name ||
                  "Select page..."
                : "Select Categories"}
            </span>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0 bg-gradient-to-r from-[#947a70] via-[#bd9d92]  border-[#D7BE9A]">
          <Command>
            <CommandInput
              placeholder="Search Categories..."
              className="bg-white text-[#947a70] "
            />
            <CommandEmpty className="bg-gradient-to-r from-[#947a70] via-[#bd9d92]  border-[#D7BE9A] text-white">
              No category found.
            </CommandEmpty>
            <CommandList className="max-h-[300px] overflow-y-auto">
              <CommandItem className="cursor-pointer hover:bg-[#d8d5cc] dark:hover:bg-gray-800">
                <Link
                  href={"/"}
                  className="flex items-center w-full text-gray-800 dark:text-gray-200"
                >
                  <Home className="mr-2 h-4 w-4" />
                  <span className="flex-1">Home</span>
                  {pathname === "/" && <Check className="ml-2 h-4 w-4 text-white" />}
                </Link>
              </CommandItem>
              {routes.map((route, key) => (
                <CommandItem
                  key={key}
                  className="cursor-pointer hover:bg-[#d8d5cc] dark:hover:bg-gray-800"
                >
                  <Link
                    href={route.href}
                    className="flex items-center w-full text-gray-800 dark:text-gray-200"
                  >
                    <Store className="mr-2 h-4 w-4" />
                    <span className="flex-1 truncate">{route.label}</span>
                    {route.active && <Check className="ml-2 h-4 w-4" />}
                  </Link>
                </CommandItem>
              ))}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <div className="items-center space-x-4 lg:space-x-6 ml-4 hidden md:flex ">
        {urls.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm font-medium transition-colors bg-clip-text hover:text-transparent hover:bg-no-repeat hover:bg-gradient-to-r hover:from-[#D2B48C] hover:to-[#EEDC82] text-white"
              // route.active
              //   ? "relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500"
              //   : "text-muted-foreground"
            )}
          >
            {route.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MainNav;
