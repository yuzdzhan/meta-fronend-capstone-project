import { AboutUs } from "./AboutUs";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Highlights } from "./Highlights";
import { Testimonials } from "./Testimonials";

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Testimonials />
        <AboutUs />
      </main>
      <Footer />
    </>
  );
}
