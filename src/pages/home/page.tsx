import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import About from './components/About';
import Services from './components/Services';
import Reviews from './components/Reviews';
import CallToAction from './components/CallToAction';
import SuccessStories from './components/SuccessStories';
import Footer from './components/Footer';
import CookieBanner from '../../components/CookieBanner';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <VideoSection />
      <About />
      <Services />
      <Reviews />
      <SuccessStories />
      <CallToAction />
      <Footer />
      <CookieBanner />
    </div>
  );
}
