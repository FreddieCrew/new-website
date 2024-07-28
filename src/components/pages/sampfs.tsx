"use client";

import Button from "@/components/button";
import { motion } from "framer-motion";

const sfs = () => {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1 }}
    >
      <h1 className="text-2xl mb-4">
        samp-fs
        <hr className="mt-3 w-[400px]" />
      </h1>
      <div className="align-center text-sm lg:text-base">
        <h2 className="mb-1">About</h2>

        <p className="mb-2">
          Modern and comprehensive filesystem add-on
        </p>

        <div className="py-3">
          <h1>Features</h1>

          <ul className="list list-style-disc mt-2">
            <li>Simple</li>
            <li>Straightforward</li>
            <li>Modern</li>
            <li>Comprehensive</li>
            <li>Consistent syntax</li>
          </ul>
        </div>

        <div className="py-5">
          <Button link="https://github.com/FreddieCrew/samp-fs">
            GitHub
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default sfs;