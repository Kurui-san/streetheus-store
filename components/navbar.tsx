import Link from "next/link";

import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";
import Image from "next/image";
export const revalidate = 0;

const Navbar = async () => {
    const categories = await getCategories();

    return (
        <div className="border-b sticky top-0 left-0 z-30 backdrop-blur-sm bg-slate-100/5 dark:bg-[#E6E3DA]/5 border-slate-600/40 dark:border-white/40">
            <Container>
                <div className="relative px-0 sm:px-6 lg:px-8 flex h-16 items-center">
                    <Link href="/" className="ml-4 flex lg:ml-0  gap-x-2">
                        <Image
                            src='/streethues.png'
                            alt="streethues"
                            width={40}
                            height={40}
                        />
                    </Link>
                    <MainNav data={categories} />
                    <NavbarActions />
                </div>
            </Container>
        </div>
    );
}
 
export default Navbar;