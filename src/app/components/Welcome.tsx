"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Welcome() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen absolute inset-0 z-10 p-4 text-center space-y-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.2
        }}
        className="text-4xl md:text-6xl font-bold"
      >
        Welcome to Suceava Hacks!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.4
        }}
        className="text-xl md:text-2xl"
      >
        Suceava Hacks is a student led for students community that aims to bring together students passionate about technology and innovation.
      </motion.p>
    </div>
  );
}