"use client";

import Button from "@/components/button";
import { motion } from "framer-motion";

const sutils = () => {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1 }}
    >
      <h1 className="text-2xl mb-4">
        sutils
        <hr className="mt-3 w-[400px]" />
      </h1>
      <div className="align-center text-sm lg:text-base">
        <h2 className="mb-1">About</h2>

        <p className="mb-2">
          Math & string utility library
        </p>

        <div className="py-3">
          <h1>Features</h1>

          <ul className="list list-style-disc mt-2">
            <li>Simple</li>
            <li>Modern</li>
            <li>Easy to use</li>
          </ul>
        </div>

        <div className="py-5">
          <Button link="https://github.com/FreddieCrew/sutils">
            GitHub
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default sutils;