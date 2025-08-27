import Image from "next/image";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import CompactThreePillars from "./component/CompactThreePillars";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <CompactThreePillars/>
    </div>
  );
}
