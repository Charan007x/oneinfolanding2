"use client";

import { motion } from "framer-motion";
import { Bebas_Neue, Roboto } from "next/font/google";
import Image from "next/image";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const brands = [
  { name: "Myntra", logo: "/logos/myntra.png" },
  { name: "Nykaa", logo: "/logos/nykaa.svg" },
  { name: "Plum", logo: "/logos/plum.png" },
  { name: "AJIO", logo: "/logos/ajio.png" },
  { name: "Flipkart", logo: "/logos/flipkart2.png" },
  { name: "Amazon", logo: "/logos/amazon2.png" },
  { name: "Meesho", logo: "/logos/meesho.png" },
  { name: "Shopsy", logo: "/logos/shopsy.png" },
];

export default function BrandsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="brands" className="w-full bg-[#0A0A0A] py-8 md:py-16 px-4 md:px-8">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex-1 space-y-8 lg:max-w-[500px]"
        >
          <h2 className={`${bebasNeue.className} text-[36px] tracking-wide leading-[1.1] text-white uppercase`}>
            USED BY SELLERS ACROSS  <span className="text-[#9F7CFF]"> INDIA'S </span> 
             BIGGEST PLATFORMS
          </h2>
          <p className={`${roboto.className} text-[20px] leading-relaxed text-[#818898]`}>
            Sell on Amazon, Flipkart, Myntra, Meesho, Nykaa, or Shopsy? OneInfo connects your content to your catalog and turns followers into buyers.
          </p>
          
          {/* Stats Grid */}
          <div className="flex items-center gap-10 lg:gap-12 pt-4 pb-2">
            <div className="flex flex-col items-start gap-1">
              <div className={`${bebasNeue.className} tracking-wide text-[#9F7CFF] text-[32px]`}>132+</div>
              <div className={`${roboto.className} text-[#818898] text-[14px] uppercase tracking-wider`}>Brands</div>
            </div>
            <div className="flex flex-col items-start gap-1">
              <div className={`${bebasNeue.className} tracking-wide text-[#9F7CFF] text-[32px]`}>20K+</div>
              <div className={`${roboto.className} text-[#818898] text-[14px] uppercase tracking-wider`}>Creators</div>
            </div>
            <div className="flex flex-col items-start gap-1">
              <div className={`${bebasNeue.className} tracking-wide text-[#9F7CFF] text-[32px]`}>10K+</div>
              <div className={`${roboto.className} text-[#818898] text-[14px] uppercase tracking-wider`}>products sold</div>
            </div>
          </div>
          
          <button className={`${roboto.className} font-medium bg-[#9F7CFF] text-white px-8 py-3 rounded-xl text-lg hover:bg-[#8b65ff] transition-colors mt-8`}>
            BROWSE THE CATALOG
          </button>
        </motion.div>

        {/* Right Column */}
        <motion.div 
          className="flex-1 w-full lg:w-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {brands.map((brand, i) => (
                    <motion.div 
                      key={i} 
                      variants={itemVariants}
                      className="aspect-square bg-white rounded-2xl flex items-center justify-center p-6 sm:p-5 relative overflow-hidden transition-transform hover:-translate-y-1 duration-300"
                    >
                        <div className="w-full h-full relative flex items-center justify-center">
                            <Image 
                                src={brand.logo} 
                                alt={brand.name} 
                                fill
                                className="object-contain p-2"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
      </div>
    </section>
  );
}
