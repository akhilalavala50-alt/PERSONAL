import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Hackathons } from './components/Hackathons';
import { CareerVision } from './components/CareerVision';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { StandaloneCodeModal } from './components/StandaloneCodeModal';
import { PlaceholderLinkModal } from './components/PlaceholderLinkModal';

export default function App() {
  const [isSourceModalOpen, setIsSourceModalOpen] = useState(false);
  const [isGithubModalOpen, setIsGithubModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900 flex flex-col font-sans selection:bg-stone-200 selection:text-slate-900">
      {/* 3-Zone Top Navigation */}
      <Navbar onOpenSourceModal={() => setIsSourceModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Skills & Technologies Section */}
        <Skills />

        {/* 4. Projects Section */}
        <Projects />

        {/* 5. Hackathons & Ideathons Section */}
        <Hackathons />

        {/* 6. Career Vision Section */}
        <CareerVision />

        {/* 7. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer
        onOpenSourceModal={() => setIsSourceModalOpen(true)}
        onOpenGithubPlaceholder={() => setIsGithubModalOpen(true)}
      />

      {/* Standalone HTML/CSS/JS Viewer & Downloader Modal */}
      <StandaloneCodeModal
        isOpen={isSourceModalOpen}
        onClose={() => setIsSourceModalOpen(false)}
      />

      {/* Global GitHub Placeholder Modal */}
      <PlaceholderLinkModal
        isOpen={isGithubModalOpen}
        onClose={() => setIsGithubModalOpen(false)}
        type="github"
      />
    </div>
  );
}
