import Image from "next/image";
import Nav from "@/app/components/Nav";
import About from "@/app/components/sections/About";
import Services from "@/app/components/sections/Services";
import Activities from "@/app/components/sections/Activities";
import Home from "@/app/components/sections/Home";


export default function main() {
  return (
      <main>
        <Nav />
        <Home/>
        <Services />
        <div className="bg-linear-to-b from-orange-100 to-white">
          <Activities/>
          <About />
        </div>
        {/* <Hours />
        <Contact /> */}
      </main>
  );
}

