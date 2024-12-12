"use client";

import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { ImagesSlider } from "./image-slider";
import { motion } from "framer-motion";
import { Billboard } from "@/types";

interface BillboardProps {
  images: string[];
  data: Billboard
}

const HomeBillboard: React.FC<BillboardProps> = ({ images, data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden aspect-square md:aspect-[2.4/1] relative backdrop-blur-sm bg-gradient-to-r from-[#947a70] via-[#bd9d92]  border-[#D7BE9A]  mt-4 mb-4 border">
      <ImagesSlider className="h-full rounded-xl" images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
            <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-white ">
              {data?.label}
              <br />
              <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-[#D2B48C] via-[#EEDC82] to-[#F5F5DC] [text-shadow:0_0_rgba(0,0,0,0.1)]">
                  <span className="">Streethues.</span>
                </div>
                <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-[#D2B48C] via-[#D2B48C] to-[#F5F5DC] py-4">
                  <span className="">Streethues.</span>
                </div>
              </div>
            </div>
          </motion.div>
          {/* <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            The hero section slideshow <br /> nobody asked for
          </motion.p> */}
          {/* <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
            <span>Join now →</span>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button> */}
        </motion.div>
      </ImagesSlider>
      {/* <div
                className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
                style={{ backgroundImage: `url(${data?.imageUrl})`}}
            >
                <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
                    <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-black ">
                        {data?.label}<br/>
                        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                                <span className="">Streethues.</span>
                            </div>
                            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                                <span className="">Streethues.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
      <BackgroundBeamsWithCollision className="absolute top-0 left-0 w-full h-full">
        <div className=""></div>
      </BackgroundBeamsWithCollision>
    </div>
  );
};

export default HomeBillboard;
