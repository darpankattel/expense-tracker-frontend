import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Testimonials from '../components/sections/Testimonials';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <Features />
        <Testimonials />
      </main>
    </div>
  );
}
