import NavbarHome from "@/app/components/Navbar";
import VantaGlobe from "@/app/components/VantaGlobe";
import Welcome from "./components/Welcome";
import OurMission from "./components/OurMission";
const Grid = () => (
  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
        <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255, 0, 0, 0.2)" strokeWidth="1"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
  </svg>
);
export default function Home() {
  return (
    <div className="">
      <div className="relative z-10">
        <NavbarHome />
        <VantaGlobe />
        <Welcome />
        <OurMission />
        <Grid />
      </div>
    </div>
  );
}
