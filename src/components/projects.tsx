"use client";

import Nav from "@/components/nav";
import Link from "next/link";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div>
      <header className="p-2">
        <Nav />
      </header>

      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        <main className="mx-auto w-screen lg:w-[900px] p-2">
          <h1 className="text-2xl mb-4">
            Projects
            <hr className="mt-3 w-[400px]" />
          </h1>

          <div className="projects">
            <div className="mt-5">
              <h2>samp-fs</h2>

              <div className="mt-3">
                <p>Simple and comprehensive filesystem add-on for SA-MP</p>

                <div>
                  <Link href="/samp-fs" className="underline">
                    More
                  </Link>
                  <span> - </span>
                  <a
                    className="underline"
                    href="https://github.com/FreddieCrew/samp-fs"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              <div className="mt-5">
                <h2>plugin-boilerplate</h2>

                <div className="mt-3">
                  <p>
                    Modern and straightforward C++ SA-MP plugin boilerplate
                    based on Southclaws&rsquo; version
                  </p>

                  <div>
                    <Link href="/plugin-boilerplate" className="underline">
                      More
                    </Link>
                    <span> - </span>
                    <a
                      className="underline"
                      href="https://github.com/FreddieCrew/plugin-boilerplate"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <h2>sutils</h2>

                <div className="mt-3">
                  <p>
                    Plugin that provides useful functions to make string manipulation in Pawn, easier. Mostly implemented in C++
                  </p>

                  <div>
                    <Link href="/sutils" className="underline">
                      More
                    </Link>
                    <span> - </span>
                    <a
                      className="underline"
                      href="https://github.com/FreddieCrew/sutils"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </motion.div>
    </div>
  );
};

export default Projects;
