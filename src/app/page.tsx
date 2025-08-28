import Image from "next/image";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import CompactThreePillars from "./component/CompactThreePillars";
import HowitWorks from "./component/HowitWorks";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <CompactThreePillars/>
      <HowitWorks/>
    </div>
  );
}
