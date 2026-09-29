import Hero from "@/app/components/Nav";
import About from "@/app/components/sections/About";
import Target from "@/app/components/sections/Target";
import Activities from "@/app/components/sections/Activities";


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Target />
      <Activities/>
      {/* <Hours />
      <Contact /> */}
    </main>
  );
}

