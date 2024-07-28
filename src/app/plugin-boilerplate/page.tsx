import Nav from "@/components/nav";
import About from "@/components/pages/boilerplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'John - plugin-boilerplate',
  description: "John | plugin-boilerplate",
}

export default function boilerplate() {
  return (
    <div>
    

      <div className="flex flex-col min-h-screen">
        <header className="p-2">
          <Nav />
        </header>

        <main className="mx-auto w-screen lg:w-[900px] p-2">
          <About />
        </main>
      </div>
    </div>
  );
}
