import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-between py-5 px-10  sm:items-start  font-sans">
      <HeroSection />
      <AboutUs />
      <ContactUs />
      <Footer />
    </main>
  );
}
