import Nav from "@/components/nav";
import About from "@/components/about";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'John - Home',
  description: "John | Home",
}

export default function Home() {
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
