
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonialsDemo";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
// import Gallery from "@/components/Gallery";

const Index = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <AnimatedTestimonialsDemo />
      {/* <Gallery /> */}
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
