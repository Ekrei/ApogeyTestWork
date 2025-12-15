import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { HowWeWork } from './components/HowWeWork.tsx';
import { Articles } from './components/Articles';
import { VideoTutorials } from './components/VideoTutorial';
import { Testimonials } from './components/Testimonials';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <HowWeWork />
      <Articles />
      <VideoTutorials />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}
