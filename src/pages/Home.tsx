import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import About from '../components/About';
import LatestPosts from '../components/LatestPosts';
import Contact from '../components/Contact';
import usePageTitle from '../usePageTitle';

export default function Home() {
  usePageTitle();
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <About />
      <LatestPosts />
      <Contact />
    </>
  );
}
