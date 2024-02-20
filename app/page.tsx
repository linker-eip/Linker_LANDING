import About from "@/components/About";
import AlternatingContent from "@/components/AlternatingContent";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import Team from "@/components/Team";
import Timeline from "@/components/Timeline";
import TopWaveDivider from "@/components/TopWaveDivider";
import WaveDivider from "@/components/WaveDivider";

export default function Home() {
  return (
    <>
      <Header />
      <MainContent />
      <WaveDivider />
      <About />
      <TopWaveDivider />
      <Features />
      <AlternatingContent />
      <WaveDivider />
      <Team />
      <TopWaveDivider />
      <Timeline />
      <WaveDivider />
      <Footer />
    </>
  );
}
