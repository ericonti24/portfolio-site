import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js'
import IntroSection from './intro/page.js';
import Milestones from './milestones/page.js';
import AboutSection from './about/page.js';
import ProjectSection from './projects/page.js'

export default function Home() {

  return (
      <>
        <IntroSection />
        <Milestones />
        <AboutSection />
        <ProjectSection />
        <Footer />
      </>
  );
}


