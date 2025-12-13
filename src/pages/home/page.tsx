import Navbar from './components/Navbar';
import Hero from './components/Hero';
//import VideoSection from './components/VideoSection';
import About from './components/About';
import Services from './components/Services';
import Reviews from './components/Reviews';
import CallToAction from './components/CallToAction';
import SuccessStories from './components/SuccessStories';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Reviews />
      <SuccessStories />
      <CallToAction />
      <Footer />
    </div>
  );
}
