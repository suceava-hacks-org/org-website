import NavbarHome from "@/app/components/Navbar";
import VantaGlobe from "@/app/components/VantaGlobe";
import Welcome from "./components/Welcome";

export default function Home() {
  return (
    <div className="">
      <div className="relative z-10">
        <NavbarHome />
        <VantaGlobe />
        <Welcome />
      </div>
    </div>
  );
}
