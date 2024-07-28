"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1 }}
    >
      <h1 className="text-2xl mb-4">
        About
        <hr className="mt-3 w-[400px]" />
      </h1>
      <div className="align-center text-sm lg:text-base">
        <p className="mb-2">
          I&rsquo;m a hobbyist developer and tech enthusiast from El Paso, Texas. I make some
          random dumb stuff every now and then.
        </p>
        <p className="mb-2">
          I&rsquo;ve been into computing and technology since I got my first PC
          when I was 8, never stopped learning and messing around since then.
        </p>

        <div className="py-3">
          <h1>Things I like to mess around with:</h1>

          <ul className="list list-style-disc mt-2">
            <li>SA-MP plugin development</li>
            <li>Automation</li>
            <li>Low level programming</li>
            <li>Hardware</li>
            <li>Reverse engineering</li>
            <li>Malware analysis</li>
          </ul>
        </div>

        <div className="py-3">
          <h1>Find me on:</h1>

          <ul className="list list-style-disc mt-2">
            <li>
              GitHub: <a className="underline" href="https://github.com/FreddieCrew" target="_blank">@FreddieCrew</a>
            </li>
            <li>
              Discord: <a className="underline" href="https://discordapp.com/users/937116391046283355" target="_blank">curl7120</a>
            </li>
            <li>
              Email: <a className="underline" href="mailto:reyesee1887@gmail.com" target="_blank">reyesee1887@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
