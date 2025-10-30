import Greetings from "@/modules/beranda/Greetings.js";
import About from "@/modules/beranda/About.js";
import More from "@/modules/beranda/More.js";
import Connect from "@/modules/beranda/Connect.js";
import { NavbarResolver } from "@/components/Elemen/layout/NavbarResolver";

export default function Home() {
  return (
    <>
      <NavbarResolver />
      <Greetings />
      <About />
      <More />
      <Connect />
    </>
  );
}
