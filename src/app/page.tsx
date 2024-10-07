"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const logos = [
  {
    id: "intelligence",
    src: "/assets/ai.png",
    alt: "Intelligence Quantum",
  },
  {
    id: "pondasi",
    src: "/assets/pondasi.png",
    alt: "Pondasi",
  },
  {
    id: "rumahkita",
    src: "/assets/homekita.png",
    alt: "Rumah Kita",
  },
  {
    id: "kreasi",
    src: "/assets/kreasidigital.png",
    alt: "Kreasi Digital Interasia",
  },
];

const defaultLogo = {
  id: "asa",
  src: "/assets/asa.png",
  alt: "Asa Kreasi Interasia",
};

export default function Home() {
  const [selectedLogo, setSelectedLogo] = useState(defaultLogo);
  const logoAngle = 360 / logos.length;
  const radius = 180;

  return (
    <div className="flex justify-between items-center h-screen relative">
      <div className="relative w-1/2 h-full flex justify-center items-center">
        <motion.div
          className="absolute w-full h-full flex justify-center items-center"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo.id}
              className="absolute cursor-pointer"
              style={{
                transform: `rotate(${
                  logoAngle * index
                }deg) translate(${radius}px) rotate(-${logoAngle * index}deg)`,
              }}
              onClick={() => setSelectedLogo(logo)}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={40}
                height={40}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Selected logo preview */}
      <div className="relative w-1/2 h-full flex justify-center items-center">
        <motion.div
          key={selectedLogo.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <Image
            src="/robot-hand.png"
            alt="Robot Hand"
            width={300}
            height={300}
            className="max-w-full h-auto" // Responsive image
          />
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <Image
              src={selectedLogo.src}
              alt={selectedLogo.alt}
              width={100}
              height={100}
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36" // Responsive sizes
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
