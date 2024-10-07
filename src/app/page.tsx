import Image from "next/image";
import Hero from "./components/Hero";
import ImageShow from "./components/ImageShow";
import Story from "./components/Story";
import Stats from "./components/Stats";
import LeaderTeam from "./components/LeaderTeam";
import ValuesSection from "./components/ValueSection";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <ImageShow />
      <Story />
      <Stats />
      <LeaderTeam />
      <ValuesSection />
      <CallToAction />
      <Footer />
    </div>
  );
}
