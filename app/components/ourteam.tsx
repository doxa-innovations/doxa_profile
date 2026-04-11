"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { Share2 } from "lucide-react";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  shapeSrc: string;
  imageWidth: string;
};

const TEAM: TeamMember[] = [
  {
    name: "Ephrem K. Getachew",
    role: "Senior Full-Stack Dev",
    image: "/team-ephrem.png",
    shapeSrc: "/triangle-purple.svg",
    imageWidth: "w-[80%]",
  },
  {
    name: "Gedion Girma",
    role: "Senior Full-Stack Dev",
    image: "/team-gedion.png",
    shapeSrc: "/hexagon-purple.svg",
    imageWidth: "w-full",
  },
  {
    name: "Cherinet Demeke",
    role: "Front-End Dev & UI/UX Designer",
    image: "/team-cherinet.png",
    shapeSrc: "/pentagon-purple.svg",
    imageWidth: "w-full",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const shapeVariants = {
  hidden: { opacity: 0, scale: 0.7, rotate: -15 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function OurTeam() {
  return (
    <section className="w-full bg-[#060311] py-20 px-4">
      {/* Heading */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold text-white tracking-tight">
          Our Team
        </h2>
        <p className="mt-3 text-gray-400 text-base">
          Professionals on the field.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {TEAM.map((member) => (
          <motion.div
            key={member.name}
            variants={cardVariants}
            className="relative flex flex-col w-72"
          >
            {/* Shape */}
            <motion.div
              variants={shapeVariants}
              className="absolute top-[-40px] left-1/2 -translate-x-1/2 w-72 h-72 z-0"
            >
              <Image
                src={member.shapeSrc}
                alt="background shape"
                fill
                sizes="288px"
                className="object-contain"
              />
            </motion.div>

            {/* Person photo */}
            <div
              className={`relative z-10 mt-4 h-[240px] mx-auto overflow-hidden ${member.imageWidth}`}
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 768px) 100vw, 288px"
                className="object-cover"
                style={{ objectPosition: "top center" }}
              />
            </div>

            {/* Info card */}
            <div className="relative z-20 w-full bg-[#2B2935]/95 backdrop-blur-md shadow-xl flex items-stretch rounded-md overflow-hidden">
              {/* Share icon */}
              <div className="flex-shrink-0 w-[52px] h-[50px] flex items-center justify-center bg-[#6800AD] rounded-bl-2xl">
                <Share2
                  size={20}
                  className="text-white fill-white"
                  strokeWidth={2.5}
                />
              </div>

              {/* Name + role */}
              <div className="flex flex-col justify-center py-3 pl-4 pr-2">
                <p className="text-[#FDFDFD] font-bold text-[17px] tracking-wide mb-1">
                  {member.name}
                </p>
                <p className="text-[#8B94A7] text-[13px] font-medium">
                  {member.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}