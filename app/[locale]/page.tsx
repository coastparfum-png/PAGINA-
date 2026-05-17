import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Products } from "@/components/sections/Products";
import { About } from "@/components/sections/About";
import { Shipping } from "@/components/sections/Shipping";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Products />
      <About />
      <Shipping />
      <ContactCTA />
    </>
  );
}
