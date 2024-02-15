import Footer from './_components/footer';
import Loader from './_components/loader';
import ContactSection from './_sections/contact';
import HeroSection from './_sections/hero';
import TestimonialSection from './_sections/testimonial';
import WorkSection from './_sections/work';
import type { Metadata } from 'next';

const HomePage = () => {
  return (
    <main className="relative overflow-x-hidden">
      <Loader />

      <HeroSection />
      <TestimonialSection />
      <WorkSection />
      <Footer />
      <ContactSection />
    </main>
  );
};

export default HomePage;
