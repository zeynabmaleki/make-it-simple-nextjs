import AboutUs from "@/components/mainPage/AboutUs";
import ContactUs from "@/components/mainPage/ContactUs";
import HeroSection from "@/components/mainPage/HeroSection";
import Footer from "@/components/mainPage/Footer";

export default function Home() {
  return (
    <main className="flex w-full flex-col  py-5 px-10 font-sans">
      <HeroSection />
      <AboutUs />
      <ContactUs />
      <Footer />
    </main>
  );
}
