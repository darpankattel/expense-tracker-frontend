import AboutHero from '../../components/sections/AboutHero';
import AboutFeatures from '../../components/sections/AboutFeatures';
import ArchitectureSection from '../../components/sections/ArchitectureSection';

export const metadata = {
  title: "About Architecture - ExpenseTracker | AWS Architecture",
  description: "Learn about ExpenseTracker's serverless AWS architecture and AI-powered expense management features.",
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <AboutHero />
        <AboutFeatures />
        <ArchitectureSection />
      </main>
    </div>
  );
}