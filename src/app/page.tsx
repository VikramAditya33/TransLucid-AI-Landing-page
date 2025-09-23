import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import ClickSpark from "@/components/ClickSpark";

export default function Home() {
  return (
    <ClickSpark sparkColor="#fff" sparkSize={12} sparkRadius={18} sparkCount={10} duration={500} easing="ease-out" extraScale={1.1}>
      <div className="font-sans min-h-screen">
        <Navbar />
        <main>
          <Hero onCtaHref="#" />
          <About />
        </main>
        <Footer />
      </div>
    </ClickSpark>
  );
}
